DO $$ BEGIN
  CREATE TYPE waitlist_locale AS ENUM ('es-PE', 'es-MX', 'es-AR', 'es-CO', 'es-CL');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

ALTER TABLE waitlist
  ADD COLUMN IF NOT EXISTS locale waitlist_locale NOT NULL DEFAULT 'es-PE';
