/*
  # Add service column to main_contact_submissions table

  1. Changes
    - Add `service` column to `main_contact_submissions` table
    - Column will be optional (nullable) text field to store the selected service
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'main_contact_submissions' AND column_name = 'service'
  ) THEN
    ALTER TABLE main_contact_submissions ADD COLUMN service text;
  END IF;
END $$;