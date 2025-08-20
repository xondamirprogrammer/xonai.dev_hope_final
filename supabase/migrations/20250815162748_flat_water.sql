/*
  # Create main contact submissions table

  1. New Tables
    - `main_contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `main_contact_submissions` table
    - Add policy for public insert access (contact forms should be accessible to everyone)
*/

CREATE TABLE IF NOT EXISTS main_contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE main_contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact forms
CREATE POLICY "Anyone can submit main contact form"
  ON main_contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read their own submissions
CREATE POLICY "Users can read own submissions"
  ON main_contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);