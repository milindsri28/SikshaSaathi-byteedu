export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          user_type: 'student' | 'teacher'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          user_type: 'student' | 'teacher'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          user_type?: 'student' | 'teacher'
          created_at?: string
          updated_at?: string
        }
      }
      student_profiles: {
        Row: {
          id: string
          user_id: string
          class: string
          school_name: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          class: string
          school_name: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          class?: string
          school_name?: string
          created_at?: string
          updated_at?: string
        }
      }
      teacher_profiles: {
        Row: {
          id: string
          user_id: string
          role: string
          subject: string
          school_name: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          role: string
          subject: string
          school_name: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          role?: string
          subject?: string
          school_name?: string
          created_at?: string
          updated_at?: string
        }
      }
      subjects: {
        Row: {
          id: string
          name: string
          description: string | null
          class_level: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          class_level: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          class_level?: string
          created_at?: string
        }
      }
      lessons: {
        Row: {
          id: string
          subject_id: string
          title: string
          description: string | null
          content_url: string | null
          type: 'video' | 'document' | 'quiz' | 'lab'
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          subject_id: string
          title: string
          description?: string | null
          content_url?: string | null
          type: 'video' | 'document' | 'quiz' | 'lab'
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          subject_id?: string
          title?: string
          description?: string | null
          content_url?: string | null
          type?: 'video' | 'document' | 'quiz' | 'lab'
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      progress: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          status: 'not_started' | 'in_progress' | 'completed'
          completion_percentage: number
          last_accessed: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          status?: 'not_started' | 'in_progress' | 'completed'
          completion_percentage?: number
          last_accessed?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          lesson_id?: string
          status?: 'not_started' | 'in_progress' | 'completed'
          completion_percentage?: number
          last_accessed?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_type: 'student' | 'teacher'
      lesson_type: 'video' | 'document' | 'quiz' | 'lab'
      progress_status: 'not_started' | 'in_progress' | 'completed'
    }
  }
}