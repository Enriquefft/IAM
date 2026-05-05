CREATE INDEX IF NOT EXISTS idx_confirmations_waitlist_id ON confirmations(waitlist_id);
CREATE INDEX IF NOT EXISTS idx_waitlist_confirmed_at ON waitlist(confirmed_at) WHERE confirmed_at IS NOT NULL;
