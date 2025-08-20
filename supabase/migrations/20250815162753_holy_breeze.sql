/*
  # Create smart websites contact submissions table

  1. New Tables
    - `smart_websites_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email_address` (text, required)
      - `project_type` (text, required)
      - `project_description` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `smart_websites_submissions` table
    - Add policy for public insert access
*/

CREATE TABLE IF NOT EXISTS smart_websites_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email_address text NOT NULL,
  project_type text NOT NULL,
  project_description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE smart_websites_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit smart websites contact forms
CREATE POLICY "Anyone can submit smart websites form"
  ON smart_websites_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read submissions
CREATE POLICY "Authenticated users can read smart websites submissions"
  ON smart_websites_submissions
  FOR SELECT
  TO authenticated
  USING (true);