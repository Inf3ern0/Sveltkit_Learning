ALTER TABLE todos ADD `status` text DEFAULT 'active' NOT NULL;--> statement-breakpoint
ALTER TABLE todos ADD `last_updated_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL;