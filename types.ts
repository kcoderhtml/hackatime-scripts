type User = {
	id: string;
	api_key: string;
	email: string;
	location: string;
	password: string;
	created_at: Date;
	last_logged_in_at: Date;
	share_data_max_days: number;
	share_editors: boolean;
	share_languages: boolean;
	share_projects: boolean;
	share_oss: boolean;
	share_machines: boolean;
	share_labels: boolean;
	is_admin: boolean;
	has_data: boolean;
	wakatime_api_key: string;
	wakatime_api_url: string;
	reset_token: string;
	reports_weekly: boolean;
	public_leaderboard: boolean;
	subscribed_until: Date | null;
	subscription_renewal: Date | null;
	stripe_customer_id: string;
	invited_by: string;
	exclude_unknown_projects: boolean;
	heartbeats_timeout_sec: number;
	name: string;
};

export type { User };