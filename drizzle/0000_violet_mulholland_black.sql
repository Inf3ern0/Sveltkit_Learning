CREATE TABLE `todos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text,
	`description` text,
	`completed_at` integer,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP
);
