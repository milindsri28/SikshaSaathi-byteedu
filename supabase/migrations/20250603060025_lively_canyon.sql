/*
  # Initial Schema Setup for SikhshaSaathi

  1. New Tables
    - users (extends auth.users)
      - id (uuid, references auth.users)
      - first_name (text)
      - last_name (text)
      - email (text)
      - phone (text)
      - user_type (text) - 'student' or 'teacher'
      - created_at (timestamptz)
      - updated_at (timestamptz)
    
    - student_profiles
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - class (text)
      - school_name (text)
      - created_at (timestamptz)
      - updated_at (timestamptz)

    - teacher_profiles
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - role (text)
      - subject (text)
      - school_name (text)
      - created_at (timestamptz)
      - updated_at (timestamptz)

    - subjects
      - id (uuid, primary key)
      - name (text)
      - description (text)
      - class_level (text)
      - created_at (timestamptz)

    - lessons
      - id (uuid, primary key)
      - subject_id (uuid, references subjects)
      - title (text)
      - description (text)
      - content_url (text)
      - type (text) - 'video', 'document', 'quiz', 'lab'
      - created_by (uuid, references users)
      - created_at (timestamptz)
      - updated_at (timestamptz)

    - progress
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - lesson_id (uuid, references lessons)
      - status (text) - 'not_started', 'in_progress', 'completed'
      - completion_percentage (integer)
      - last_accessed (timestamptz)
      - created_at (timestamptz)
      - updated_at (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for appropriate access control
*/

-- Create custom types
CREATE TYPE user_type AS ENUM ('student', 'teacher');
CREATE TYPE lesson_type AS ENUM ('video', 'document', 'quiz', 'lab');
CREATE TYPE progress_status AS ENUM ('not_started', 'in_progress', 'completed');

-- Create users table that extends auth.users
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  user_type user_type NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create student_profiles table
CREATE TABLE student_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users NOT NULL,
  class TEXT NOT NULL,
  school_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create teacher_profiles table
CREATE TABLE teacher_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users NOT NULL,
  role TEXT NOT NULL,
  subject TEXT NOT NULL,
  school_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create subjects table
CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  class_level TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create lessons table
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id UUID REFERENCES subjects NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  content_url TEXT,
  type lesson_type NOT NULL,
  created_by UUID REFERENCES users NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create progress table
CREATE TABLE progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users NOT NULL,
  lesson_id UUID REFERENCES lessons NOT NULL,
  status progress_status DEFAULT 'not_started',
  completion_percentage INTEGER DEFAULT 0,
  last_accessed TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Users can read their own data
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

-- Students can read their own profile
CREATE POLICY "Students can read own profile" ON student_profiles
  FOR SELECT USING (auth.uid() = user_id);

-- Teachers can read their own profile
CREATE POLICY "Teachers can read own profile" ON teacher_profiles
  FOR SELECT USING (auth.uid() = user_id);

-- Everyone can read subjects
CREATE POLICY "Everyone can read subjects" ON subjects
  FOR SELECT USING (true);

-- Teachers can create subjects
CREATE POLICY "Teachers can create subjects" ON subjects
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND user_type = 'teacher'
    )
  );

-- Everyone can read lessons
CREATE POLICY "Everyone can read lessons" ON lessons
  FOR SELECT USING (true);

-- Teachers can create and update lessons
CREATE POLICY "Teachers can create lessons" ON lessons
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND user_type = 'teacher'
    )
  );

CREATE POLICY "Teachers can update own lessons" ON lessons
  FOR UPDATE USING (created_by = auth.uid());

-- Users can read their own progress
CREATE POLICY "Users can read own progress" ON progress
  FOR SELECT USING (auth.uid() = user_id);

-- Users can update their own progress
CREATE POLICY "Users can update own progress" ON progress
  FOR UPDATE USING (auth.uid() = user_id);

-- Create functions for automatic timestamp updates
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;   
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_student_profiles_updated_at
    BEFORE UPDATE ON student_profiles
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_teacher_profiles_updated_at
    BEFORE UPDATE ON teacher_profiles
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_lessons_updated_at
    BEFORE UPDATE ON lessons
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();

CREATE TRIGGER update_progress_updated_at
    BEFORE UPDATE ON progress
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();