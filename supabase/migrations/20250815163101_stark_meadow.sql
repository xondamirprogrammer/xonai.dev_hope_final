/*
  # Create AI agents submissions table

  1. New Tables
    - `ai_agents_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email_address` (text)  
      - `project_type` (text)
      - `project_description` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `ai_agents_submissions` table
    - Add policy for anonymous users to submit forms
    - Add policy for authenticated users to read submissions
*/

CREATE TABLE IF NOT EXISTS ai_agents_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email_address text NOT NULL,
  project_type text NOT NULL,
  project_description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE ai_agents_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit ai agents form"
  ON ai_agents_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read ai agents submissions"
  ON ai_agents_submissions
  FOR SELECT
  TO authenticated
  USING (true);