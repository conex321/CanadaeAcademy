-- Migration: Create courses table
-- Apply via Supabase Dashboard SQL Editor

CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  grade TEXT NOT NULL,
  pathway TEXT NOT NULL,
  category TEXT NOT NULL,
  price_domestic INTEGER NOT NULL DEFAULT 57400,
  price_international INTEGER NOT NULL DEFAULT 122400,
  is_free BOOLEAN NOT NULL DEFAULT FALSE,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read courses" ON courses FOR SELECT USING (true);
