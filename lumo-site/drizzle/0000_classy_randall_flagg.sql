CREATE TABLE `demo_workflows` (
	`user_id` text PRIMARY KEY NOT NULL,
	`mode` text NOT NULL,
	`goal` text NOT NULL,
	`title` text NOT NULL,
	`steps_json` text NOT NULL,
	`output` text NOT NULL,
	`details_json` text NOT NULL,
	`created_at` integer NOT NULL
);
