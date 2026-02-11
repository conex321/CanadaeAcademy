-- Migration: Create students table
-- Apply via Supabase Dashboard SQL Editor

CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_type TEXT NOT NULL CHECK (student_type IN ('domestic', 'international')),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  date_of_birth DATE,
  phone TEXT,
  address_line1 TEXT,
  address_line2 TEXT,
  city TEXT,
  province_state TEXT,
  postal_code TEXT,
  country TEXT NOT NULL DEFAULT 'Canada',
  previous_school TEXT,
  oen TEXT,
  current_grade TEXT,
  parent_name TEXT,
  parent_email TEXT,
  parent_phone TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert students" ON students FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can read students" ON students FOR SELECT USING (true);
