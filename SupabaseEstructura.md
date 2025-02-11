

[
  {
    "table_schema": "auth",
    "table_name": "audit_log_entries"
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state"
  },
  {
    "table_schema": "auth",
    "table_name": "identities"
  },
  {
    "table_schema": "auth",
    "table_name": "instances"
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_amr_claims"
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_challenges"
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors"
  },
  {
    "table_schema": "auth",
    "table_name": "one_time_tokens"
  },
  {
    "table_schema": "auth",
    "table_name": "refresh_tokens"
  },
  {
    "table_schema": "auth",
    "table_name": "saml_providers"
  },
  {
    "table_schema": "auth",
    "table_name": "saml_relay_states"
  },
  {
    "table_schema": "auth",
    "table_name": "schema_migrations"
  },
  {
    "table_schema": "auth",
    "table_name": "sessions"
  },
  {
    "table_schema": "auth",
    "table_name": "sso_domains"
  },
  {
    "table_schema": "auth",
    "table_name": "sso_providers"
  },
  {
    "table_schema": "auth",
    "table_name": "users"
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key"
  },
  {
    "table_schema": "public",
    "table_name": "campanas"
  },
  {
    "table_schema": "public",
    "table_name": "etapas"
  },
  {
    "table_schema": "public",
    "table_name": "info_empresa"
  },
  {
    "table_schema": "public",
    "table_name": "info_extra"
  },
  {
    "table_schema": "public",
    "table_name": "inmobiliarias"
  },
  {
    "table_schema": "public",
    "table_name": "prospectos"
  },
  {
    "table_schema": "public",
    "table_name": "proyectos"
  },
  {
    "table_schema": "public",
    "table_name": "seguimientos"
  },
  {
    "table_schema": "public",
    "table_name": "users"
  },
  {
    "table_schema": "realtime",
    "table_name": "messages"
  },
  {
    "table_schema": "realtime",
    "table_name": "schema_migrations"
  },
  {
    "table_schema": "realtime",
    "table_name": "subscription"
  },
  {
    "table_schema": "storage",
    "table_name": "buckets"
  },
  {
    "table_schema": "storage",
    "table_name": "migrations"
  },
  {
    "table_schema": "storage",
    "table_name": "objects"
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads"
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts"
  },
  {
    "table_schema": "vault",
    "table_name": "secrets"
  }
]
____

[
  {
    "table_schema": "auth",
    "table_name": "audit_log_entries",
    "column_name": "instance_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "audit_log_entries",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "audit_log_entries",
    "column_name": "payload",
    "data_type": "json",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "audit_log_entries",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "audit_log_entries",
    "column_name": "ip_address",
    "data_type": "character varying",
    "is_nullable": "NO",
    "column_default": "''::character varying"
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "user_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "auth_code",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "code_challenge_method",
    "data_type": "USER-DEFINED",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "code_challenge",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "provider_type",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "provider_access_token",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "provider_refresh_token",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "authentication_method",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "flow_state",
    "column_name": "auth_code_issued_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "identities",
    "column_name": "provider_id",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "identities",
    "column_name": "user_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "identities",
    "column_name": "identity_data",
    "data_type": "jsonb",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "identities",
    "column_name": "provider",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "identities",
    "column_name": "last_sign_in_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "identities",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "identities",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "identities",
    "column_name": "email",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "identities",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "gen_random_uuid()"
  },
  {
    "table_schema": "auth",
    "table_name": "instances",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "instances",
    "column_name": "uuid",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "instances",
    "column_name": "raw_base_config",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "instances",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "instances",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_amr_claims",
    "column_name": "session_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_amr_claims",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_amr_claims",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_amr_claims",
    "column_name": "authentication_method",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_amr_claims",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_challenges",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_challenges",
    "column_name": "factor_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_challenges",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_challenges",
    "column_name": "verified_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_challenges",
    "column_name": "ip_address",
    "data_type": "inet",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_challenges",
    "column_name": "otp_code",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_challenges",
    "column_name": "web_authn_session_data",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "user_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "friendly_name",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "factor_type",
    "data_type": "USER-DEFINED",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "status",
    "data_type": "USER-DEFINED",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "secret",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "phone",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "last_challenged_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "web_authn_credential",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "web_authn_aaguid",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "one_time_tokens",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "one_time_tokens",
    "column_name": "user_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "one_time_tokens",
    "column_name": "token_type",
    "data_type": "USER-DEFINED",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "one_time_tokens",
    "column_name": "token_hash",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "one_time_tokens",
    "column_name": "relates_to",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "one_time_tokens",
    "column_name": "created_at",
    "data_type": "timestamp without time zone",
    "is_nullable": "NO",
    "column_default": "now()"
  },
  {
    "table_schema": "auth",
    "table_name": "one_time_tokens",
    "column_name": "updated_at",
    "data_type": "timestamp without time zone",
    "is_nullable": "NO",
    "column_default": "now()"
  },
  {
    "table_schema": "auth",
    "table_name": "refresh_tokens",
    "column_name": "instance_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "refresh_tokens",
    "column_name": "id",
    "data_type": "bigint",
    "is_nullable": "NO",
    "column_default": "nextval('auth.refresh_tokens_id_seq'::regclass)"
  },
  {
    "table_schema": "auth",
    "table_name": "refresh_tokens",
    "column_name": "token",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "refresh_tokens",
    "column_name": "user_id",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "refresh_tokens",
    "column_name": "revoked",
    "data_type": "boolean",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "refresh_tokens",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "refresh_tokens",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "refresh_tokens",
    "column_name": "parent",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "refresh_tokens",
    "column_name": "session_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_providers",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_providers",
    "column_name": "sso_provider_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_providers",
    "column_name": "entity_id",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_providers",
    "column_name": "metadata_xml",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_providers",
    "column_name": "metadata_url",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_providers",
    "column_name": "attribute_mapping",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_providers",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_providers",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_providers",
    "column_name": "name_id_format",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_relay_states",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_relay_states",
    "column_name": "sso_provider_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_relay_states",
    "column_name": "request_id",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_relay_states",
    "column_name": "for_email",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_relay_states",
    "column_name": "redirect_to",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_relay_states",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_relay_states",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "saml_relay_states",
    "column_name": "flow_state_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "schema_migrations",
    "column_name": "version",
    "data_type": "character varying",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "user_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "factor_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "aal",
    "data_type": "USER-DEFINED",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "not_after",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "refreshed_at",
    "data_type": "timestamp without time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "user_agent",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "ip",
    "data_type": "inet",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "tag",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sso_domains",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sso_domains",
    "column_name": "sso_provider_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sso_domains",
    "column_name": "domain",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sso_domains",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sso_domains",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sso_providers",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sso_providers",
    "column_name": "resource_id",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sso_providers",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "sso_providers",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "instance_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "aud",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "role",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "email",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "encrypted_password",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "email_confirmed_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "invited_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "confirmation_token",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "confirmation_sent_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "recovery_token",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "recovery_sent_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "email_change_token_new",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "email_change",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "email_change_sent_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "last_sign_in_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "raw_app_meta_data",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "raw_user_meta_data",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "is_super_admin",
    "data_type": "boolean",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "phone",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": "NULL::character varying"
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "phone_confirmed_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "phone_change",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": "''::character varying"
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "phone_change_token",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": "''::character varying"
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "phone_change_sent_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "confirmed_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "email_change_token_current",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": "''::character varying"
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "email_change_confirm_status",
    "data_type": "smallint",
    "is_nullable": "YES",
    "column_default": "0"
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "banned_until",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "reauthentication_token",
    "data_type": "character varying",
    "is_nullable": "YES",
    "column_default": "''::character varying"
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "reauthentication_sent_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "is_sso_user",
    "data_type": "boolean",
    "is_nullable": "NO",
    "column_default": "false"
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "deleted_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "column_name": "is_anonymous",
    "data_type": "boolean",
    "is_nullable": "NO",
    "column_default": "false"
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "userid",
    "data_type": "oid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "dbid",
    "data_type": "oid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "toplevel",
    "data_type": "boolean",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "queryid",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "query",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "plans",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "total_plan_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "min_plan_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "max_plan_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "mean_plan_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "stddev_plan_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "calls",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "total_exec_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "min_exec_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "max_exec_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "mean_exec_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "stddev_exec_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "rows",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "shared_blks_hit",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "shared_blks_read",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "shared_blks_dirtied",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "shared_blks_written",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "local_blks_hit",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "local_blks_read",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "local_blks_dirtied",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "local_blks_written",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "temp_blks_read",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "temp_blks_written",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "blk_read_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "blk_write_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "temp_blk_read_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "temp_blk_write_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "wal_records",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "wal_fpi",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "wal_bytes",
    "data_type": "numeric",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "jit_functions",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "jit_generation_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "jit_inlining_count",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "jit_inlining_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "jit_optimization_count",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "jit_optimization_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "jit_emission_count",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements",
    "column_name": "jit_emission_time",
    "data_type": "double precision",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements_info",
    "column_name": "dealloc",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "extensions",
    "table_name": "pg_stat_statements_info",
    "column_name": "stats_reset",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "status",
    "data_type": "USER-DEFINED",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "created",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "expires",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "key_type",
    "data_type": "USER-DEFINED",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "key_id",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "key_context",
    "data_type": "bytea",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "name",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "associated_data",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "raw_key",
    "data_type": "bytea",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "decrypted_raw_key",
    "data_type": "bytea",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "raw_key_nonce",
    "data_type": "bytea",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "parent_key",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "decrypted_key",
    "column_name": "comment",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "gen_random_uuid()"
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "status",
    "data_type": "USER-DEFINED",
    "is_nullable": "YES",
    "column_default": "'valid'::pgsodium.key_status"
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "created",
    "data_type": "timestamp with time zone",
    "is_nullable": "NO",
    "column_default": "CURRENT_TIMESTAMP"
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "expires",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "key_type",
    "data_type": "USER-DEFINED",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "key_id",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": "nextval('pgsodium.key_key_id_seq'::regclass)"
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "key_context",
    "data_type": "bytea",
    "is_nullable": "YES",
    "column_default": "'\\x7067736f6469756d'::bytea"
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "name",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "associated_data",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": "'associated'::text"
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "raw_key",
    "data_type": "bytea",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "raw_key_nonce",
    "data_type": "bytea",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "parent_key",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "comment",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "column_name": "user_data",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "mask_columns",
    "column_name": "attname",
    "data_type": "name",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "mask_columns",
    "column_name": "attrelid",
    "data_type": "oid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "mask_columns",
    "column_name": "key_id",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "mask_columns",
    "column_name": "key_id_column",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "mask_columns",
    "column_name": "associated_columns",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "mask_columns",
    "column_name": "nonce_column",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "mask_columns",
    "column_name": "format_type",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "attrelid",
    "data_type": "oid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "attnum",
    "data_type": "integer",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "relnamespace",
    "data_type": "regnamespace",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "relname",
    "data_type": "name",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "attname",
    "data_type": "name",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "format_type",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "col_description",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "key_id_column",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "key_id",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "associated_columns",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "nonce_column",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "view_name",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "priority",
    "data_type": "integer",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "masking_rule",
    "column_name": "security_invoker",
    "data_type": "boolean",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "valid_key",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "valid_key",
    "column_name": "name",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "valid_key",
    "column_name": "status",
    "data_type": "USER-DEFINED",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "valid_key",
    "column_name": "key_type",
    "data_type": "USER-DEFINED",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "valid_key",
    "column_name": "key_id",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "valid_key",
    "column_name": "key_context",
    "data_type": "bytea",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "valid_key",
    "column_name": "created",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "valid_key",
    "column_name": "expires",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "pgsodium",
    "table_name": "valid_key",
    "column_name": "associated_data",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "campanas",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "uuid_generate_v4()"
  },
  {
    "table_schema": "public",
    "table_name": "campanas",
    "column_name": "nombre",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "campanas",
    "column_name": "descripcion",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "campanas",
    "column_name": "mensaje",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "campanas",
    "column_name": "caracteristicas",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": "'{}'::jsonb"
  },
  {
    "table_schema": "public",
    "table_name": "campanas",
    "column_name": "filtros",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": "'{}'::jsonb"
  },
  {
    "table_schema": "public",
    "table_name": "campanas",
    "column_name": "inmobiliaria_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "campanas",
    "column_name": "estado",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": "'borrador'::text"
  },
  {
    "table_schema": "public",
    "table_name": "campanas",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "campanas",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "etapas",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "uuid_generate_v4()"
  },
  {
    "table_schema": "public",
    "table_name": "etapas",
    "column_name": "nombre",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "etapas",
    "column_name": "orden",
    "data_type": "integer",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "etapas",
    "column_name": "color",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "etapas",
    "column_name": "inmobiliaria_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "etapas",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "etapas",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "info_empresa",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "uuid_generate_v4()"
  },
  {
    "table_schema": "public",
    "table_name": "info_empresa",
    "column_name": "inmobiliaria_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "info_empresa",
    "column_name": "proceso_compra",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "info_empresa",
    "column_name": "politicas",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "info_empresa",
    "column_name": "ubicaciones",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": "'{}'::jsonb"
  },
  {
    "table_schema": "public",
    "table_name": "info_empresa",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "info_empresa",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "info_extra",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "uuid_generate_v4()"
  },
  {
    "table_schema": "public",
    "table_name": "info_extra",
    "column_name": "nombre",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "info_extra",
    "column_name": "descripcion",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "info_extra",
    "column_name": "contenido",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "info_extra",
    "column_name": "inmobiliaria_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "info_extra",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "info_extra",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "inmobiliarias",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "gen_random_uuid()"
  },
  {
    "table_schema": "public",
    "table_name": "inmobiliarias",
    "column_name": "nombre",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "inmobiliarias",
    "column_name": "direccion",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "inmobiliarias",
    "column_name": "telefono",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "uuid_generate_v4()"
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "nombre",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "whatsapp",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "etapa_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "proyecto_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "vendedor_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "inmobiliaria_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "requisitos_calificacion",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": "'{}'::jsonb"
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "fecha_seguimiento",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "cantidad_seguimientos",
    "data_type": "integer",
    "is_nullable": "YES",
    "column_default": "0"
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "automatizacion_activa",
    "data_type": "boolean",
    "is_nullable": "YES",
    "column_default": "false"
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "proyectos",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "uuid_generate_v4()"
  },
  {
    "table_schema": "public",
    "table_name": "proyectos",
    "column_name": "nombre",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "proyectos",
    "column_name": "ubicacion",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "proyectos",
    "column_name": "caracteristicas",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": "'{}'::jsonb"
  },
  {
    "table_schema": "public",
    "table_name": "proyectos",
    "column_name": "inmobiliaria_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "proyectos",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "proyectos",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "seguimientos",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "uuid_generate_v4()"
  },
  {
    "table_schema": "public",
    "table_name": "seguimientos",
    "column_name": "prospecto_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "seguimientos",
    "column_name": "vendedor_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "seguimientos",
    "column_name": "nota",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "seguimientos",
    "column_name": "fecha",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "seguimientos",
    "column_name": "siguiente_seguimiento",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "seguimientos",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "public",
    "table_name": "users",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "auth.uid()"
  },
  {
    "table_schema": "public",
    "table_name": "users",
    "column_name": "email",
    "data_type": "character varying",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "users",
    "column_name": "name",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "users",
    "column_name": "inmobiliaria_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "public",
    "table_name": "users",
    "column_name": "role",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": "'user'::text"
  },
  {
    "table_schema": "realtime",
    "table_name": "messages",
    "column_name": "topic",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "realtime",
    "table_name": "messages",
    "column_name": "extension",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "realtime",
    "table_name": "messages",
    "column_name": "payload",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "realtime",
    "table_name": "messages",
    "column_name": "event",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "realtime",
    "table_name": "messages",
    "column_name": "private",
    "data_type": "boolean",
    "is_nullable": "YES",
    "column_default": "false"
  },
  {
    "table_schema": "realtime",
    "table_name": "messages",
    "column_name": "updated_at",
    "data_type": "timestamp without time zone",
    "is_nullable": "NO",
    "column_default": "now()"
  },
  {
    "table_schema": "realtime",
    "table_name": "messages",
    "column_name": "inserted_at",
    "data_type": "timestamp without time zone",
    "is_nullable": "NO",
    "column_default": "now()"
  },
  {
    "table_schema": "realtime",
    "table_name": "messages",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "gen_random_uuid()"
  },
  {
    "table_schema": "realtime",
    "table_name": "schema_migrations",
    "column_name": "version",
    "data_type": "bigint",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "realtime",
    "table_name": "schema_migrations",
    "column_name": "inserted_at",
    "data_type": "timestamp without time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "realtime",
    "table_name": "subscription",
    "column_name": "id",
    "data_type": "bigint",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "realtime",
    "table_name": "subscription",
    "column_name": "subscription_id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "realtime",
    "table_name": "subscription",
    "column_name": "entity",
    "data_type": "regclass",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "realtime",
    "table_name": "subscription",
    "column_name": "filters",
    "data_type": "ARRAY",
    "is_nullable": "NO",
    "column_default": "'{}'::realtime.user_defined_filter[]"
  },
  {
    "table_schema": "realtime",
    "table_name": "subscription",
    "column_name": "claims",
    "data_type": "jsonb",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "realtime",
    "table_name": "subscription",
    "column_name": "claims_role",
    "data_type": "regrole",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "realtime",
    "table_name": "subscription",
    "column_name": "created_at",
    "data_type": "timestamp without time zone",
    "is_nullable": "NO",
    "column_default": "timezone('utc'::text, now())"
  },
  {
    "table_schema": "storage",
    "table_name": "buckets",
    "column_name": "id",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "buckets",
    "column_name": "name",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "buckets",
    "column_name": "owner",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "buckets",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "storage",
    "table_name": "buckets",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "storage",
    "table_name": "buckets",
    "column_name": "public",
    "data_type": "boolean",
    "is_nullable": "YES",
    "column_default": "false"
  },
  {
    "table_schema": "storage",
    "table_name": "buckets",
    "column_name": "avif_autodetection",
    "data_type": "boolean",
    "is_nullable": "YES",
    "column_default": "false"
  },
  {
    "table_schema": "storage",
    "table_name": "buckets",
    "column_name": "file_size_limit",
    "data_type": "bigint",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "buckets",
    "column_name": "allowed_mime_types",
    "data_type": "ARRAY",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "buckets",
    "column_name": "owner_id",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "migrations",
    "column_name": "id",
    "data_type": "integer",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "migrations",
    "column_name": "name",
    "data_type": "character varying",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "migrations",
    "column_name": "hash",
    "data_type": "character varying",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "migrations",
    "column_name": "executed_at",
    "data_type": "timestamp without time zone",
    "is_nullable": "YES",
    "column_default": "CURRENT_TIMESTAMP"
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "gen_random_uuid()"
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "bucket_id",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "name",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "owner",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "last_accessed_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": "now()"
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "metadata",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "path_tokens",
    "data_type": "ARRAY",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "version",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "owner_id",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "user_metadata",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads",
    "column_name": "id",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads",
    "column_name": "in_progress_size",
    "data_type": "bigint",
    "is_nullable": "NO",
    "column_default": "0"
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads",
    "column_name": "upload_signature",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads",
    "column_name": "bucket_id",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads",
    "column_name": "key",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads",
    "column_name": "version",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads",
    "column_name": "owner_id",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "NO",
    "column_default": "now()"
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads",
    "column_name": "user_metadata",
    "data_type": "jsonb",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "gen_random_uuid()"
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "upload_id",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "size",
    "data_type": "bigint",
    "is_nullable": "NO",
    "column_default": "0"
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "part_number",
    "data_type": "integer",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "bucket_id",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "key",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "etag",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "owner_id",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "version",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "NO",
    "column_default": "now()"
  },
  {
    "table_schema": "vault",
    "table_name": "decrypted_secrets",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "vault",
    "table_name": "decrypted_secrets",
    "column_name": "name",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "vault",
    "table_name": "decrypted_secrets",
    "column_name": "description",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "vault",
    "table_name": "decrypted_secrets",
    "column_name": "secret",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "vault",
    "table_name": "decrypted_secrets",
    "column_name": "decrypted_secret",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "vault",
    "table_name": "decrypted_secrets",
    "column_name": "key_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "vault",
    "table_name": "decrypted_secrets",
    "column_name": "nonce",
    "data_type": "bytea",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "vault",
    "table_name": "decrypted_secrets",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "vault",
    "table_name": "decrypted_secrets",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "vault",
    "table_name": "secrets",
    "column_name": "id",
    "data_type": "uuid",
    "is_nullable": "NO",
    "column_default": "gen_random_uuid()"
  },
  {
    "table_schema": "vault",
    "table_name": "secrets",
    "column_name": "name",
    "data_type": "text",
    "is_nullable": "YES",
    "column_default": null
  },
  {
    "table_schema": "vault",
    "table_name": "secrets",
    "column_name": "description",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": "''::text"
  },
  {
    "table_schema": "vault",
    "table_name": "secrets",
    "column_name": "secret",
    "data_type": "text",
    "is_nullable": "NO",
    "column_default": null
  },
  {
    "table_schema": "vault",
    "table_name": "secrets",
    "column_name": "key_id",
    "data_type": "uuid",
    "is_nullable": "YES",
    "column_default": "(pgsodium.create_key()).id"
  },
  {
    "table_schema": "vault",
    "table_name": "secrets",
    "column_name": "nonce",
    "data_type": "bytea",
    "is_nullable": "YES",
    "column_default": "pgsodium.crypto_aead_det_noncegen()"
  },
  {
    "table_schema": "vault",
    "table_name": "secrets",
    "column_name": "created_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "NO",
    "column_default": "CURRENT_TIMESTAMP"
  },
  {
    "table_schema": "vault",
    "table_name": "secrets",
    "column_name": "updated_at",
    "data_type": "timestamp with time zone",
    "is_nullable": "NO",
    "column_default": "CURRENT_TIMESTAMP"
  }
]

________

[
  {
    "constraint_name": "identities_user_id_fkey",
    "table_schema": "auth",
    "table_name": "identities",
    "column_name": "user_id",
    "foreign_table_schema": "auth",
    "foreign_table_name": "users",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "mfa_amr_claims_session_id_fkey",
    "table_schema": "auth",
    "table_name": "mfa_amr_claims",
    "column_name": "session_id",
    "foreign_table_schema": "auth",
    "foreign_table_name": "sessions",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "mfa_challenges_auth_factor_id_fkey",
    "table_schema": "auth",
    "table_name": "mfa_challenges",
    "column_name": "factor_id",
    "foreign_table_schema": "auth",
    "foreign_table_name": "mfa_factors",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "mfa_factors_user_id_fkey",
    "table_schema": "auth",
    "table_name": "mfa_factors",
    "column_name": "user_id",
    "foreign_table_schema": "auth",
    "foreign_table_name": "users",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "one_time_tokens_user_id_fkey",
    "table_schema": "auth",
    "table_name": "one_time_tokens",
    "column_name": "user_id",
    "foreign_table_schema": "auth",
    "foreign_table_name": "users",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "refresh_tokens_session_id_fkey",
    "table_schema": "auth",
    "table_name": "refresh_tokens",
    "column_name": "session_id",
    "foreign_table_schema": "auth",
    "foreign_table_name": "sessions",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "saml_providers_sso_provider_id_fkey",
    "table_schema": "auth",
    "table_name": "saml_providers",
    "column_name": "sso_provider_id",
    "foreign_table_schema": "auth",
    "foreign_table_name": "sso_providers",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "saml_relay_states_flow_state_id_fkey",
    "table_schema": "auth",
    "table_name": "saml_relay_states",
    "column_name": "flow_state_id",
    "foreign_table_schema": "auth",
    "foreign_table_name": "flow_state",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "saml_relay_states_sso_provider_id_fkey",
    "table_schema": "auth",
    "table_name": "saml_relay_states",
    "column_name": "sso_provider_id",
    "foreign_table_schema": "auth",
    "foreign_table_name": "sso_providers",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "sessions_user_id_fkey",
    "table_schema": "auth",
    "table_name": "sessions",
    "column_name": "user_id",
    "foreign_table_schema": "auth",
    "foreign_table_name": "users",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "sso_domains_sso_provider_id_fkey",
    "table_schema": "auth",
    "table_name": "sso_domains",
    "column_name": "sso_provider_id",
    "foreign_table_schema": "auth",
    "foreign_table_name": "sso_providers",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "campanas_inmobiliaria_id_fkey",
    "table_schema": "public",
    "table_name": "campanas",
    "column_name": "inmobiliaria_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "inmobiliarias",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "etapas_inmobiliaria_id_fkey",
    "table_schema": "public",
    "table_name": "etapas",
    "column_name": "inmobiliaria_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "inmobiliarias",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "info_empresa_inmobiliaria_id_fkey",
    "table_schema": "public",
    "table_name": "info_empresa",
    "column_name": "inmobiliaria_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "inmobiliarias",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "info_extra_inmobiliaria_id_fkey",
    "table_schema": "public",
    "table_name": "info_extra",
    "column_name": "inmobiliaria_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "inmobiliarias",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "prospectos_inmobiliaria_id_fkey",
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "inmobiliaria_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "inmobiliarias",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "prospectos_proyecto_id_fkey",
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "proyecto_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "proyectos",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "prospectos_vendedor_id_fkey",
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "vendedor_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "users",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "prospectos_etapa_id_fkey",
    "table_schema": "public",
    "table_name": "prospectos",
    "column_name": "etapa_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "etapas",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "proyectos_inmobiliaria_id_fkey",
    "table_schema": "public",
    "table_name": "proyectos",
    "column_name": "inmobiliaria_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "inmobiliarias",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "seguimientos_vendedor_id_fkey",
    "table_schema": "public",
    "table_name": "seguimientos",
    "column_name": "vendedor_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "users",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "seguimientos_prospecto_id_fkey",
    "table_schema": "public",
    "table_name": "seguimientos",
    "column_name": "prospecto_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "prospectos",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "users_inmobiliaria_id_fkey",
    "table_schema": "public",
    "table_name": "users",
    "column_name": "inmobiliaria_id",
    "foreign_table_schema": "public",
    "foreign_table_name": "inmobiliarias",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "objects_bucketId_fkey",
    "table_schema": "storage",
    "table_name": "objects",
    "column_name": "bucket_id",
    "foreign_table_schema": "storage",
    "foreign_table_name": "buckets",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "s3_multipart_uploads_bucket_id_fkey",
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads",
    "column_name": "bucket_id",
    "foreign_table_schema": "storage",
    "foreign_table_name": "buckets",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "s3_multipart_uploads_parts_bucket_id_fkey",
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "bucket_id",
    "foreign_table_schema": "storage",
    "foreign_table_name": "buckets",
    "foreign_column_name": "id"
  },
  {
    "constraint_name": "s3_multipart_uploads_parts_upload_id_fkey",
    "table_schema": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "column_name": "upload_id",
    "foreign_table_schema": "storage",
    "foreign_table_name": "s3_multipart_uploads",
    "foreign_column_name": "id"
  }
]

_______

[
  {
    "constraint_name": "audit_log_entries_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "audit_log_entries",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "flow_state_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "flow_state",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "identities_provider_id_provider_unique",
    "contype": "u",
    "schema_name": "auth",
    "table_name": "identities",
    "definition": "UNIQUE (provider_id, provider)"
  },
  {
    "constraint_name": "identities_user_id_fkey",
    "contype": "f",
    "schema_name": "auth",
    "table_name": "identities",
    "definition": "FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "identities_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "identities",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "instances_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "instances",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "mfa_amr_claims_session_id_authentication_method_pkey",
    "contype": "u",
    "schema_name": "auth",
    "table_name": "mfa_amr_claims",
    "definition": "UNIQUE (session_id, authentication_method)"
  },
  {
    "constraint_name": "amr_id_pk",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "mfa_amr_claims",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "mfa_amr_claims_session_id_fkey",
    "contype": "f",
    "schema_name": "auth",
    "table_name": "mfa_amr_claims",
    "definition": "FOREIGN KEY (session_id) REFERENCES auth.sessions(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "mfa_challenges_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "mfa_challenges",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "mfa_challenges_auth_factor_id_fkey",
    "contype": "f",
    "schema_name": "auth",
    "table_name": "mfa_challenges",
    "definition": "FOREIGN KEY (factor_id) REFERENCES auth.mfa_factors(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "mfa_factors_last_challenged_at_key",
    "contype": "u",
    "schema_name": "auth",
    "table_name": "mfa_factors",
    "definition": "UNIQUE (last_challenged_at)"
  },
  {
    "constraint_name": "mfa_factors_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "mfa_factors",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "mfa_factors_user_id_fkey",
    "contype": "f",
    "schema_name": "auth",
    "table_name": "mfa_factors",
    "definition": "FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "one_time_tokens_user_id_fkey",
    "contype": "f",
    "schema_name": "auth",
    "table_name": "one_time_tokens",
    "definition": "FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "one_time_tokens_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "one_time_tokens",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "one_time_tokens_token_hash_check",
    "contype": "c",
    "schema_name": "auth",
    "table_name": "one_time_tokens",
    "definition": "CHECK ((char_length(token_hash) > 0))"
  },
  {
    "constraint_name": "refresh_tokens_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "refresh_tokens",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "refresh_tokens_token_unique",
    "contype": "u",
    "schema_name": "auth",
    "table_name": "refresh_tokens",
    "definition": "UNIQUE (token)"
  },
  {
    "constraint_name": "refresh_tokens_session_id_fkey",
    "contype": "f",
    "schema_name": "auth",
    "table_name": "refresh_tokens",
    "definition": "FOREIGN KEY (session_id) REFERENCES auth.sessions(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "metadata_url not empty",
    "contype": "c",
    "schema_name": "auth",
    "table_name": "saml_providers",
    "definition": "CHECK (((metadata_url = NULL::text) OR (char_length(metadata_url) > 0)))"
  },
  {
    "constraint_name": "metadata_xml not empty",
    "contype": "c",
    "schema_name": "auth",
    "table_name": "saml_providers",
    "definition": "CHECK ((char_length(metadata_xml) > 0))"
  },
  {
    "constraint_name": "saml_providers_sso_provider_id_fkey",
    "contype": "f",
    "schema_name": "auth",
    "table_name": "saml_providers",
    "definition": "FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "saml_providers_entity_id_key",
    "contype": "u",
    "schema_name": "auth",
    "table_name": "saml_providers",
    "definition": "UNIQUE (entity_id)"
  },
  {
    "constraint_name": "saml_providers_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "saml_providers",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "entity_id not empty",
    "contype": "c",
    "schema_name": "auth",
    "table_name": "saml_providers",
    "definition": "CHECK ((char_length(entity_id) > 0))"
  },
  {
    "constraint_name": "saml_relay_states_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "saml_relay_states",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "request_id not empty",
    "contype": "c",
    "schema_name": "auth",
    "table_name": "saml_relay_states",
    "definition": "CHECK ((char_length(request_id) > 0))"
  },
  {
    "constraint_name": "saml_relay_states_flow_state_id_fkey",
    "contype": "f",
    "schema_name": "auth",
    "table_name": "saml_relay_states",
    "definition": "FOREIGN KEY (flow_state_id) REFERENCES auth.flow_state(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "saml_relay_states_sso_provider_id_fkey",
    "contype": "f",
    "schema_name": "auth",
    "table_name": "saml_relay_states",
    "definition": "FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "schema_migrations_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "schema_migrations",
    "definition": "PRIMARY KEY (version)"
  },
  {
    "constraint_name": "sessions_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "sessions",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "sessions_user_id_fkey",
    "contype": "f",
    "schema_name": "auth",
    "table_name": "sessions",
    "definition": "FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "sso_domains_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "sso_domains",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "sso_domains_sso_provider_id_fkey",
    "contype": "f",
    "schema_name": "auth",
    "table_name": "sso_domains",
    "definition": "FOREIGN KEY (sso_provider_id) REFERENCES auth.sso_providers(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "domain not empty",
    "contype": "c",
    "schema_name": "auth",
    "table_name": "sso_domains",
    "definition": "CHECK ((char_length(domain) > 0))"
  },
  {
    "constraint_name": "resource_id not empty",
    "contype": "c",
    "schema_name": "auth",
    "table_name": "sso_providers",
    "definition": "CHECK (((resource_id = NULL::text) OR (char_length(resource_id) > 0)))"
  },
  {
    "constraint_name": "sso_providers_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "sso_providers",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "auth_users_email_key",
    "contype": "u",
    "schema_name": "auth",
    "table_name": "users",
    "definition": "UNIQUE (email)"
  },
  {
    "constraint_name": "users_pkey",
    "contype": "p",
    "schema_name": "auth",
    "table_name": "users",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "users_phone_key",
    "contype": "u",
    "schema_name": "auth",
    "table_name": "users",
    "definition": "UNIQUE (phone)"
  },
  {
    "constraint_name": "users_email_change_confirm_status_check",
    "contype": "c",
    "schema_name": "auth",
    "table_name": "users",
    "definition": "CHECK (((email_change_confirm_status >= 0) AND (email_change_confirm_status <= 2)))"
  },
  {
    "constraint_name": "key_key_context_check",
    "contype": "c",
    "schema_name": "pgsodium",
    "table_name": "key",
    "definition": "CHECK ((length(key_context) = 8))"
  },
  {
    "constraint_name": "key_pkey",
    "contype": "p",
    "schema_name": "pgsodium",
    "table_name": "key",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "key_parent_key_fkey",
    "contype": "f",
    "schema_name": "pgsodium",
    "table_name": "key",
    "definition": "FOREIGN KEY (parent_key) REFERENCES pgsodium.key(id)"
  },
  {
    "constraint_name": "pgsodium_key_unique_name",
    "contype": "u",
    "schema_name": "pgsodium",
    "table_name": "key",
    "definition": "UNIQUE (name)"
  },
  {
    "constraint_name": "pgsodium_raw",
    "contype": "c",
    "schema_name": "pgsodium",
    "table_name": "key",
    "definition": "CHECK (\nCASE\n    WHEN (raw_key IS NOT NULL) THEN ((key_id IS NULL) AND (key_context IS NULL) AND (parent_key IS NOT NULL))\n    ELSE ((key_id IS NOT NULL) AND (key_context IS NOT NULL) AND (parent_key IS NULL))\nEND)"
  },
  {
    "constraint_name": "campanas_inmobiliaria_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "campanas",
    "definition": "FOREIGN KEY (inmobiliaria_id) REFERENCES inmobiliarias(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "campanas_pkey",
    "contype": "p",
    "schema_name": "public",
    "table_name": "campanas",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "etapas_inmobiliaria_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "etapas",
    "definition": "FOREIGN KEY (inmobiliaria_id) REFERENCES inmobiliarias(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "etapas_inmobiliaria_id_nombre_key",
    "contype": "u",
    "schema_name": "public",
    "table_name": "etapas",
    "definition": "UNIQUE (inmobiliaria_id, nombre)"
  },
  {
    "constraint_name": "etapas_pkey",
    "contype": "p",
    "schema_name": "public",
    "table_name": "etapas",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "info_empresa_pkey",
    "contype": "p",
    "schema_name": "public",
    "table_name": "info_empresa",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "info_empresa_inmobiliaria_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "info_empresa",
    "definition": "FOREIGN KEY (inmobiliaria_id) REFERENCES inmobiliarias(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "info_empresa_inmobiliaria_id_key",
    "contype": "u",
    "schema_name": "public",
    "table_name": "info_empresa",
    "definition": "UNIQUE (inmobiliaria_id)"
  },
  {
    "constraint_name": "info_extra_inmobiliaria_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "info_extra",
    "definition": "FOREIGN KEY (inmobiliaria_id) REFERENCES inmobiliarias(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "info_extra_pkey",
    "contype": "p",
    "schema_name": "public",
    "table_name": "info_extra",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "inmobiliarias_pkey",
    "contype": "p",
    "schema_name": "public",
    "table_name": "inmobiliarias",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "prospectos_inmobiliaria_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "prospectos",
    "definition": "FOREIGN KEY (inmobiliaria_id) REFERENCES inmobiliarias(id)"
  },
  {
    "constraint_name": "prospectos_vendedor_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "prospectos",
    "definition": "FOREIGN KEY (vendedor_id) REFERENCES users(id)"
  },
  {
    "constraint_name": "prospectos_pkey",
    "contype": "p",
    "schema_name": "public",
    "table_name": "prospectos",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "prospectos_proyecto_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "prospectos",
    "definition": "FOREIGN KEY (proyecto_id) REFERENCES proyectos(id)"
  },
  {
    "constraint_name": "prospectos_etapa_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "prospectos",
    "definition": "FOREIGN KEY (etapa_id) REFERENCES etapas(id)"
  },
  {
    "constraint_name": "proyectos_inmobiliaria_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "proyectos",
    "definition": "FOREIGN KEY (inmobiliaria_id) REFERENCES inmobiliarias(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "proyectos_pkey",
    "contype": "p",
    "schema_name": "public",
    "table_name": "proyectos",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "seguimientos_pkey",
    "contype": "p",
    "schema_name": "public",
    "table_name": "seguimientos",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "seguimientos_vendedor_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "seguimientos",
    "definition": "FOREIGN KEY (vendedor_id) REFERENCES users(id)"
  },
  {
    "constraint_name": "seguimientos_prospecto_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "seguimientos",
    "definition": "FOREIGN KEY (prospecto_id) REFERENCES prospectos(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "users_pkey",
    "contype": "p",
    "schema_name": "public",
    "table_name": "users",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "users_inmobiliaria_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "users",
    "definition": "FOREIGN KEY (inmobiliaria_id) REFERENCES inmobiliarias(id)"
  },
  {
    "constraint_name": "users_id_fkey",
    "contype": "f",
    "schema_name": "public",
    "table_name": "users",
    "definition": "FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "users_role_check",
    "contype": "c",
    "schema_name": "public",
    "table_name": "users",
    "definition": "CHECK ((role = ANY (ARRAY['admin'::text, 'user'::text, 'dev'::text])))"
  },
  {
    "constraint_name": "users_email_key",
    "contype": "u",
    "schema_name": "public",
    "table_name": "users",
    "definition": "UNIQUE (email)"
  },
  {
    "constraint_name": "messages_pkey",
    "contype": "p",
    "schema_name": "realtime",
    "table_name": "messages",
    "definition": "PRIMARY KEY (id, inserted_at)"
  },
  {
    "constraint_name": "schema_migrations_pkey",
    "contype": "p",
    "schema_name": "realtime",
    "table_name": "schema_migrations",
    "definition": "PRIMARY KEY (version)"
  },
  {
    "constraint_name": "pk_subscription",
    "contype": "p",
    "schema_name": "realtime",
    "table_name": "subscription",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "buckets_pkey",
    "contype": "p",
    "schema_name": "storage",
    "table_name": "buckets",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "migrations_pkey",
    "contype": "p",
    "schema_name": "storage",
    "table_name": "migrations",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "migrations_name_key",
    "contype": "u",
    "schema_name": "storage",
    "table_name": "migrations",
    "definition": "UNIQUE (name)"
  },
  {
    "constraint_name": "objects_bucketId_fkey",
    "contype": "f",
    "schema_name": "storage",
    "table_name": "objects",
    "definition": "FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id)"
  },
  {
    "constraint_name": "objects_pkey",
    "contype": "p",
    "schema_name": "storage",
    "table_name": "objects",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "s3_multipart_uploads_pkey",
    "contype": "p",
    "schema_name": "storage",
    "table_name": "s3_multipart_uploads",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "s3_multipart_uploads_bucket_id_fkey",
    "contype": "f",
    "schema_name": "storage",
    "table_name": "s3_multipart_uploads",
    "definition": "FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id)"
  },
  {
    "constraint_name": "s3_multipart_uploads_parts_pkey",
    "contype": "p",
    "schema_name": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "definition": "PRIMARY KEY (id)"
  },
  {
    "constraint_name": "s3_multipart_uploads_parts_upload_id_fkey",
    "contype": "f",
    "schema_name": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "definition": "FOREIGN KEY (upload_id) REFERENCES storage.s3_multipart_uploads(id) ON DELETE CASCADE"
  },
  {
    "constraint_name": "s3_multipart_uploads_parts_bucket_id_fkey",
    "contype": "f",
    "schema_name": "storage",
    "table_name": "s3_multipart_uploads_parts",
    "definition": "FOREIGN KEY (bucket_id) REFERENCES storage.buckets(id)"
  },
  {
    "constraint_name": "secrets_key_id_fkey",
    "contype": "f",
    "schema_name": "vault",
    "table_name": "secrets",
    "definition": "FOREIGN KEY (key_id) REFERENCES pgsodium.key(id)"
  },
  {
    "constraint_name": "secrets_pkey",
    "contype": "p",
    "schema_name": "vault",
    "table_name": "secrets",
    "definition": "PRIMARY KEY (id)"
  }
]

______

[
  {
    "policy_name": "Allow authenticated users to read their role",
    "schema_name": "auth",
    "table_name": "users",
    "using_expression": "(auth.uid() = id)",
    "with_check_expression": null,
    "polcmd": "r",
    "polpermissive": true
  },
  {
    "policy_name": "campanas_select_policy",
    "schema_name": "public",
    "table_name": "campanas",
    "using_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid))",
    "with_check_expression": null,
    "polcmd": "r",
    "polpermissive": true
  },
  {
    "policy_name": "etapas_insert_policy",
    "schema_name": "public",
    "table_name": "etapas",
    "using_expression": null,
    "with_check_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (((auth.jwt() ->> 'role'::text) = 'admin'::text) AND (inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid)))",
    "polcmd": "a",
    "polpermissive": true
  },
  {
    "policy_name": "etapas_select_policy",
    "schema_name": "public",
    "table_name": "etapas",
    "using_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid))",
    "with_check_expression": null,
    "polcmd": "r",
    "polpermissive": true
  },
  {
    "policy_name": "info_empresa_select_policy",
    "schema_name": "public",
    "table_name": "info_empresa",
    "using_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid))",
    "with_check_expression": null,
    "polcmd": "r",
    "polpermissive": true
  },
  {
    "policy_name": "info_extra_select_policy",
    "schema_name": "public",
    "table_name": "info_extra",
    "using_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid))",
    "with_check_expression": null,
    "polcmd": "r",
    "polpermissive": true
  },
  {
    "policy_name": "allow_all_to_select",
    "schema_name": "public",
    "table_name": "inmobiliarias",
    "using_expression": "true",
    "with_check_expression": null,
    "polcmd": "r",
    "polpermissive": true
  },
  {
    "policy_name": "allow_dev_to_delete",
    "schema_name": "public",
    "table_name": "inmobiliarias",
    "using_expression": "(((auth.jwt() -> 'app_metadata'::text) ->> 'role'::text) = 'dev'::text)",
    "with_check_expression": null,
    "polcmd": "d",
    "polpermissive": true
  },
  {
    "policy_name": "allow_dev_to_insert",
    "schema_name": "public",
    "table_name": "inmobiliarias",
    "using_expression": null,
    "with_check_expression": "(((auth.jwt() -> 'app_metadata'::text) ->> 'role'::text) = 'dev'::text)",
    "polcmd": "a",
    "polpermissive": true
  },
  {
    "policy_name": "allow_dev_to_update",
    "schema_name": "public",
    "table_name": "inmobiliarias",
    "using_expression": "(((auth.jwt() -> 'app_metadata'::text) ->> 'role'::text) = 'dev'::text)",
    "with_check_expression": "(((auth.jwt() -> 'app_metadata'::text) ->> 'role'::text) = 'dev'::text)",
    "polcmd": "w",
    "polpermissive": true
  },
  {
    "policy_name": "inmobiliarias_select_policy",
    "schema_name": "public",
    "table_name": "inmobiliarias",
    "using_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid))",
    "with_check_expression": null,
    "polcmd": "r",
    "polpermissive": true
  },
  {
    "policy_name": "inmobiliarias_update_policy",
    "schema_name": "public",
    "table_name": "inmobiliarias",
    "using_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (((auth.jwt() ->> 'role'::text) = 'admin'::text) AND (id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid)))",
    "with_check_expression": null,
    "polcmd": "w",
    "polpermissive": true
  },
  {
    "policy_name": "prospectos_insert_policy",
    "schema_name": "public",
    "table_name": "prospectos",
    "using_expression": null,
    "with_check_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid))",
    "polcmd": "a",
    "polpermissive": true
  },
  {
    "policy_name": "prospectos_select_policy",
    "schema_name": "public",
    "table_name": "prospectos",
    "using_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid))",
    "with_check_expression": null,
    "polcmd": "r",
    "polpermissive": true
  },
  {
    "policy_name": "proyectos_insert_policy",
    "schema_name": "public",
    "table_name": "proyectos",
    "using_expression": null,
    "with_check_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (((auth.jwt() ->> 'role'::text) = 'admin'::text) AND (inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid)))",
    "polcmd": "a",
    "polpermissive": true
  },
  {
    "policy_name": "proyectos_select_policy",
    "schema_name": "public",
    "table_name": "proyectos",
    "using_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid))",
    "with_check_expression": null,
    "polcmd": "r",
    "polpermissive": true
  },
  {
    "policy_name": "seguimientos_select_policy",
    "schema_name": "public",
    "table_name": "seguimientos",
    "using_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (EXISTS ( SELECT 1\n   FROM prospectos\n  WHERE ((prospectos.id = seguimientos.prospecto_id) AND (prospectos.inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid)))))",
    "with_check_expression": null,
    "polcmd": "r",
    "polpermissive": true
  },
  {
    "policy_name": "users_select_policy",
    "schema_name": "public",
    "table_name": "users",
    "using_expression": "((auth.uid() = id) OR ((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (((auth.jwt() ->> 'role'::text) = 'admin'::text) AND (inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid)))",
    "with_check_expression": null,
    "polcmd": "r",
    "polpermissive": true
  },
  {
    "policy_name": "users_update_policy",
    "schema_name": "public",
    "table_name": "users",
    "using_expression": "(((auth.jwt() ->> 'role'::text) = 'dev'::text) OR (((auth.jwt() ->> 'role'::text) = 'admin'::text) AND (inmobiliaria_id = ((auth.jwt() ->> 'inmobiliaria_id'::text))::uuid)))",
    "with_check_expression": null,
    "polcmd": "w",
    "polpermissive": true
  }
]
______

[
  {
    "table_schema": "auth",
    "table_name": "users",
    "trigger_name": "trigger_set_default_role",
    "action_timing": "BEFORE",
    "event": "INSERT",
    "definition": "EXECUTE FUNCTION set_default_role()"
  },
  {
    "table_schema": "auth",
    "table_name": "users",
    "trigger_name": "trigger_sync_user_creation",
    "action_timing": "AFTER",
    "event": "INSERT",
    "definition": "EXECUTE FUNCTION sync_user_creation()"
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "trigger_name": "key_encrypt_secret_trigger_raw_key",
    "action_timing": "BEFORE",
    "event": "INSERT",
    "definition": "EXECUTE FUNCTION pgsodium.key_encrypt_secret_raw_key()"
  },
  {
    "table_schema": "pgsodium",
    "table_name": "key",
    "trigger_name": "key_encrypt_secret_trigger_raw_key",
    "action_timing": "BEFORE",
    "event": "UPDATE",
    "definition": "EXECUTE FUNCTION pgsodium.key_encrypt_secret_raw_key()"
  },
  {
    "table_schema": "public",
    "table_name": "users",
    "trigger_name": "trigger_update_user_metadata",
    "action_timing": "AFTER",
    "event": "UPDATE",
    "definition": "EXECUTE FUNCTION update_user_metadata()"
  },
  {
    "table_schema": "realtime",
    "table_name": "subscription",
    "trigger_name": "tr_check_filters",
    "action_timing": "BEFORE",
    "event": "INSERT",
    "definition": "EXECUTE FUNCTION realtime.subscription_check_filters()"
  },
  {
    "table_schema": "realtime",
    "table_name": "subscription",
    "trigger_name": "tr_check_filters",
    "action_timing": "BEFORE",
    "event": "UPDATE",
    "definition": "EXECUTE FUNCTION realtime.subscription_check_filters()"
  },
  {
    "table_schema": "storage",
    "table_name": "objects",
    "trigger_name": "update_objects_updated_at",
    "action_timing": "BEFORE",
    "event": "UPDATE",
    "definition": "EXECUTE FUNCTION storage.update_updated_at_column()"
  },
  {
    "table_schema": "vault",
    "table_name": "secrets",
    "trigger_name": "secrets_encrypt_secret_trigger_secret",
    "action_timing": "BEFORE",
    "event": "UPDATE",
    "definition": "EXECUTE FUNCTION vault.secrets_encrypt_secret_secret()"
  },
  {
    "table_schema": "vault",
    "table_name": "secrets",
    "trigger_name": "secrets_encrypt_secret_trigger_secret",
    "action_timing": "BEFORE",
    "event": "INSERT",
    "definition": "EXECUTE FUNCTION vault.secrets_encrypt_secret_secret()"
  }
]
_____

[
  {
    "schemaname": "auth",
    "tablename": "audit_log_entries",
    "indexname": "audit_log_entries_pkey",
    "indexdef": "CREATE UNIQUE INDEX audit_log_entries_pkey ON auth.audit_log_entries USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "audit_log_entries",
    "indexname": "audit_logs_instance_id_idx",
    "indexdef": "CREATE INDEX audit_logs_instance_id_idx ON auth.audit_log_entries USING btree (instance_id)"
  },
  {
    "schemaname": "auth",
    "tablename": "flow_state",
    "indexname": "flow_state_created_at_idx",
    "indexdef": "CREATE INDEX flow_state_created_at_idx ON auth.flow_state USING btree (created_at DESC)"
  },
  {
    "schemaname": "auth",
    "tablename": "flow_state",
    "indexname": "flow_state_pkey",
    "indexdef": "CREATE UNIQUE INDEX flow_state_pkey ON auth.flow_state USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "flow_state",
    "indexname": "idx_auth_code",
    "indexdef": "CREATE INDEX idx_auth_code ON auth.flow_state USING btree (auth_code)"
  },
  {
    "schemaname": "auth",
    "tablename": "flow_state",
    "indexname": "idx_user_id_auth_method",
    "indexdef": "CREATE INDEX idx_user_id_auth_method ON auth.flow_state USING btree (user_id, authentication_method)"
  },
  {
    "schemaname": "auth",
    "tablename": "identities",
    "indexname": "identities_email_idx",
    "indexdef": "CREATE INDEX identities_email_idx ON auth.identities USING btree (email text_pattern_ops)"
  },
  {
    "schemaname": "auth",
    "tablename": "identities",
    "indexname": "identities_pkey",
    "indexdef": "CREATE UNIQUE INDEX identities_pkey ON auth.identities USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "identities",
    "indexname": "identities_provider_id_provider_unique",
    "indexdef": "CREATE UNIQUE INDEX identities_provider_id_provider_unique ON auth.identities USING btree (provider_id, provider)"
  },
  {
    "schemaname": "auth",
    "tablename": "identities",
    "indexname": "identities_user_id_idx",
    "indexdef": "CREATE INDEX identities_user_id_idx ON auth.identities USING btree (user_id)"
  },
  {
    "schemaname": "auth",
    "tablename": "instances",
    "indexname": "instances_pkey",
    "indexdef": "CREATE UNIQUE INDEX instances_pkey ON auth.instances USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "mfa_amr_claims",
    "indexname": "amr_id_pk",
    "indexdef": "CREATE UNIQUE INDEX amr_id_pk ON auth.mfa_amr_claims USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "mfa_amr_claims",
    "indexname": "mfa_amr_claims_session_id_authentication_method_pkey",
    "indexdef": "CREATE UNIQUE INDEX mfa_amr_claims_session_id_authentication_method_pkey ON auth.mfa_amr_claims USING btree (session_id, authentication_method)"
  },
  {
    "schemaname": "auth",
    "tablename": "mfa_challenges",
    "indexname": "mfa_challenge_created_at_idx",
    "indexdef": "CREATE INDEX mfa_challenge_created_at_idx ON auth.mfa_challenges USING btree (created_at DESC)"
  },
  {
    "schemaname": "auth",
    "tablename": "mfa_challenges",
    "indexname": "mfa_challenges_pkey",
    "indexdef": "CREATE UNIQUE INDEX mfa_challenges_pkey ON auth.mfa_challenges USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "mfa_factors",
    "indexname": "factor_id_created_at_idx",
    "indexdef": "CREATE INDEX factor_id_created_at_idx ON auth.mfa_factors USING btree (user_id, created_at)"
  },
  {
    "schemaname": "auth",
    "tablename": "mfa_factors",
    "indexname": "mfa_factors_last_challenged_at_key",
    "indexdef": "CREATE UNIQUE INDEX mfa_factors_last_challenged_at_key ON auth.mfa_factors USING btree (last_challenged_at)"
  },
  {
    "schemaname": "auth",
    "tablename": "mfa_factors",
    "indexname": "mfa_factors_pkey",
    "indexdef": "CREATE UNIQUE INDEX mfa_factors_pkey ON auth.mfa_factors USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "mfa_factors",
    "indexname": "mfa_factors_user_friendly_name_unique",
    "indexdef": "CREATE UNIQUE INDEX mfa_factors_user_friendly_name_unique ON auth.mfa_factors USING btree (friendly_name, user_id) WHERE (TRIM(BOTH FROM friendly_name) <> ''::text)"
  },
  {
    "schemaname": "auth",
    "tablename": "mfa_factors",
    "indexname": "mfa_factors_user_id_idx",
    "indexdef": "CREATE INDEX mfa_factors_user_id_idx ON auth.mfa_factors USING btree (user_id)"
  },
  {
    "schemaname": "auth",
    "tablename": "mfa_factors",
    "indexname": "unique_phone_factor_per_user",
    "indexdef": "CREATE UNIQUE INDEX unique_phone_factor_per_user ON auth.mfa_factors USING btree (user_id, phone)"
  },
  {
    "schemaname": "auth",
    "tablename": "one_time_tokens",
    "indexname": "one_time_tokens_pkey",
    "indexdef": "CREATE UNIQUE INDEX one_time_tokens_pkey ON auth.one_time_tokens USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "one_time_tokens",
    "indexname": "one_time_tokens_relates_to_hash_idx",
    "indexdef": "CREATE INDEX one_time_tokens_relates_to_hash_idx ON auth.one_time_tokens USING hash (relates_to)"
  },
  {
    "schemaname": "auth",
    "tablename": "one_time_tokens",
    "indexname": "one_time_tokens_token_hash_hash_idx",
    "indexdef": "CREATE INDEX one_time_tokens_token_hash_hash_idx ON auth.one_time_tokens USING hash (token_hash)"
  },
  {
    "schemaname": "auth",
    "tablename": "one_time_tokens",
    "indexname": "one_time_tokens_user_id_token_type_key",
    "indexdef": "CREATE UNIQUE INDEX one_time_tokens_user_id_token_type_key ON auth.one_time_tokens USING btree (user_id, token_type)"
  },
  {
    "schemaname": "auth",
    "tablename": "refresh_tokens",
    "indexname": "refresh_tokens_instance_id_idx",
    "indexdef": "CREATE INDEX refresh_tokens_instance_id_idx ON auth.refresh_tokens USING btree (instance_id)"
  },
  {
    "schemaname": "auth",
    "tablename": "refresh_tokens",
    "indexname": "refresh_tokens_instance_id_user_id_idx",
    "indexdef": "CREATE INDEX refresh_tokens_instance_id_user_id_idx ON auth.refresh_tokens USING btree (instance_id, user_id)"
  },
  {
    "schemaname": "auth",
    "tablename": "refresh_tokens",
    "indexname": "refresh_tokens_parent_idx",
    "indexdef": "CREATE INDEX refresh_tokens_parent_idx ON auth.refresh_tokens USING btree (parent)"
  },
  {
    "schemaname": "auth",
    "tablename": "refresh_tokens",
    "indexname": "refresh_tokens_pkey",
    "indexdef": "CREATE UNIQUE INDEX refresh_tokens_pkey ON auth.refresh_tokens USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "refresh_tokens",
    "indexname": "refresh_tokens_session_id_revoked_idx",
    "indexdef": "CREATE INDEX refresh_tokens_session_id_revoked_idx ON auth.refresh_tokens USING btree (session_id, revoked)"
  },
  {
    "schemaname": "auth",
    "tablename": "refresh_tokens",
    "indexname": "refresh_tokens_token_unique",
    "indexdef": "CREATE UNIQUE INDEX refresh_tokens_token_unique ON auth.refresh_tokens USING btree (token)"
  },
  {
    "schemaname": "auth",
    "tablename": "refresh_tokens",
    "indexname": "refresh_tokens_updated_at_idx",
    "indexdef": "CREATE INDEX refresh_tokens_updated_at_idx ON auth.refresh_tokens USING btree (updated_at DESC)"
  },
  {
    "schemaname": "auth",
    "tablename": "saml_providers",
    "indexname": "saml_providers_entity_id_key",
    "indexdef": "CREATE UNIQUE INDEX saml_providers_entity_id_key ON auth.saml_providers USING btree (entity_id)"
  },
  {
    "schemaname": "auth",
    "tablename": "saml_providers",
    "indexname": "saml_providers_pkey",
    "indexdef": "CREATE UNIQUE INDEX saml_providers_pkey ON auth.saml_providers USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "saml_providers",
    "indexname": "saml_providers_sso_provider_id_idx",
    "indexdef": "CREATE INDEX saml_providers_sso_provider_id_idx ON auth.saml_providers USING btree (sso_provider_id)"
  },
  {
    "schemaname": "auth",
    "tablename": "saml_relay_states",
    "indexname": "saml_relay_states_created_at_idx",
    "indexdef": "CREATE INDEX saml_relay_states_created_at_idx ON auth.saml_relay_states USING btree (created_at DESC)"
  },
  {
    "schemaname": "auth",
    "tablename": "saml_relay_states",
    "indexname": "saml_relay_states_for_email_idx",
    "indexdef": "CREATE INDEX saml_relay_states_for_email_idx ON auth.saml_relay_states USING btree (for_email)"
  },
  {
    "schemaname": "auth",
    "tablename": "saml_relay_states",
    "indexname": "saml_relay_states_pkey",
    "indexdef": "CREATE UNIQUE INDEX saml_relay_states_pkey ON auth.saml_relay_states USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "saml_relay_states",
    "indexname": "saml_relay_states_sso_provider_id_idx",
    "indexdef": "CREATE INDEX saml_relay_states_sso_provider_id_idx ON auth.saml_relay_states USING btree (sso_provider_id)"
  },
  {
    "schemaname": "auth",
    "tablename": "schema_migrations",
    "indexname": "schema_migrations_pkey",
    "indexdef": "CREATE UNIQUE INDEX schema_migrations_pkey ON auth.schema_migrations USING btree (version)"
  },
  {
    "schemaname": "auth",
    "tablename": "sessions",
    "indexname": "sessions_not_after_idx",
    "indexdef": "CREATE INDEX sessions_not_after_idx ON auth.sessions USING btree (not_after DESC)"
  },
  {
    "schemaname": "auth",
    "tablename": "sessions",
    "indexname": "sessions_pkey",
    "indexdef": "CREATE UNIQUE INDEX sessions_pkey ON auth.sessions USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "sessions",
    "indexname": "sessions_user_id_idx",
    "indexdef": "CREATE INDEX sessions_user_id_idx ON auth.sessions USING btree (user_id)"
  },
  {
    "schemaname": "auth",
    "tablename": "sessions",
    "indexname": "user_id_created_at_idx",
    "indexdef": "CREATE INDEX user_id_created_at_idx ON auth.sessions USING btree (user_id, created_at)"
  },
  {
    "schemaname": "auth",
    "tablename": "sso_domains",
    "indexname": "sso_domains_domain_idx",
    "indexdef": "CREATE UNIQUE INDEX sso_domains_domain_idx ON auth.sso_domains USING btree (lower(domain))"
  },
  {
    "schemaname": "auth",
    "tablename": "sso_domains",
    "indexname": "sso_domains_pkey",
    "indexdef": "CREATE UNIQUE INDEX sso_domains_pkey ON auth.sso_domains USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "sso_domains",
    "indexname": "sso_domains_sso_provider_id_idx",
    "indexdef": "CREATE INDEX sso_domains_sso_provider_id_idx ON auth.sso_domains USING btree (sso_provider_id)"
  },
  {
    "schemaname": "auth",
    "tablename": "sso_providers",
    "indexname": "sso_providers_pkey",
    "indexdef": "CREATE UNIQUE INDEX sso_providers_pkey ON auth.sso_providers USING btree (id)"
  },
  {
    "schemaname": "auth",
    "tablename": "sso_providers",
    "indexname": "sso_providers_resource_id_idx",
    "indexdef": "CREATE UNIQUE INDEX sso_providers_resource_id_idx ON auth.sso_providers USING btree (lower(resource_id))"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "auth_users_email_key",
    "indexdef": "CREATE UNIQUE INDEX auth_users_email_key ON auth.users USING btree (email)"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "confirmation_token_idx",
    "indexdef": "CREATE UNIQUE INDEX confirmation_token_idx ON auth.users USING btree (confirmation_token) WHERE ((confirmation_token)::text !~ '^[0-9 ]*$'::text)"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "email_change_token_current_idx",
    "indexdef": "CREATE UNIQUE INDEX email_change_token_current_idx ON auth.users USING btree (email_change_token_current) WHERE ((email_change_token_current)::text !~ '^[0-9 ]*$'::text)"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "email_change_token_new_idx",
    "indexdef": "CREATE UNIQUE INDEX email_change_token_new_idx ON auth.users USING btree (email_change_token_new) WHERE ((email_change_token_new)::text !~ '^[0-9 ]*$'::text)"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "reauthentication_token_idx",
    "indexdef": "CREATE UNIQUE INDEX reauthentication_token_idx ON auth.users USING btree (reauthentication_token) WHERE ((reauthentication_token)::text !~ '^[0-9 ]*$'::text)"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "recovery_token_idx",
    "indexdef": "CREATE UNIQUE INDEX recovery_token_idx ON auth.users USING btree (recovery_token) WHERE ((recovery_token)::text !~ '^[0-9 ]*$'::text)"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "users_email_partial_key",
    "indexdef": "CREATE UNIQUE INDEX users_email_partial_key ON auth.users USING btree (email) WHERE (is_sso_user = false)"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "users_instance_id_email_idx",
    "indexdef": "CREATE INDEX users_instance_id_email_idx ON auth.users USING btree (instance_id, lower((email)::text))"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "users_instance_id_idx",
    "indexdef": "CREATE INDEX users_instance_id_idx ON auth.users USING btree (instance_id)"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "users_is_anonymous_idx",
    "indexdef": "CREATE INDEX users_is_anonymous_idx ON auth.users USING btree (is_anonymous)"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "users_phone_key",
    "indexdef": "CREATE UNIQUE INDEX users_phone_key ON auth.users USING btree (phone)"
  },
  {
    "schemaname": "auth",
    "tablename": "users",
    "indexname": "users_pkey",
    "indexdef": "CREATE UNIQUE INDEX users_pkey ON auth.users USING btree (id)"
  },
  {
    "schemaname": "pgsodium",
    "tablename": "key",
    "indexname": "key_key_id_key_context_key_type_idx",
    "indexdef": "CREATE UNIQUE INDEX key_key_id_key_context_key_type_idx ON pgsodium.key USING btree (key_id, key_context, key_type)"
  },
  {
    "schemaname": "pgsodium",
    "tablename": "key",
    "indexname": "key_pkey",
    "indexdef": "CREATE UNIQUE INDEX key_pkey ON pgsodium.key USING btree (id)"
  },
  {
    "schemaname": "pgsodium",
    "tablename": "key",
    "indexname": "key_status_idx",
    "indexdef": "CREATE INDEX key_status_idx ON pgsodium.key USING btree (status) WHERE (status = ANY (ARRAY['valid'::pgsodium.key_status, 'default'::pgsodium.key_status]))"
  },
  {
    "schemaname": "pgsodium",
    "tablename": "key",
    "indexname": "key_status_idx1",
    "indexdef": "CREATE UNIQUE INDEX key_status_idx1 ON pgsodium.key USING btree (status) WHERE (status = 'default'::pgsodium.key_status)"
  },
  {
    "schemaname": "pgsodium",
    "tablename": "key",
    "indexname": "pgsodium_key_unique_name",
    "indexdef": "CREATE UNIQUE INDEX pgsodium_key_unique_name ON pgsodium.key USING btree (name)"
  },
  {
    "schemaname": "public",
    "tablename": "campanas",
    "indexname": "campanas_pkey",
    "indexdef": "CREATE UNIQUE INDEX campanas_pkey ON public.campanas USING btree (id)"
  },
  {
    "schemaname": "public",
    "tablename": "campanas",
    "indexname": "idx_campanas_estado",
    "indexdef": "CREATE INDEX idx_campanas_estado ON public.campanas USING btree (estado)"
  },
  {
    "schemaname": "public",
    "tablename": "campanas",
    "indexname": "idx_campanas_inmobiliaria",
    "indexdef": "CREATE INDEX idx_campanas_inmobiliaria ON public.campanas USING btree (inmobiliaria_id)"
  },
  {
    "schemaname": "public",
    "tablename": "etapas",
    "indexname": "etapas_inmobiliaria_id_nombre_key",
    "indexdef": "CREATE UNIQUE INDEX etapas_inmobiliaria_id_nombre_key ON public.etapas USING btree (inmobiliaria_id, nombre)"
  },
  {
    "schemaname": "public",
    "tablename": "etapas",
    "indexname": "etapas_pkey",
    "indexdef": "CREATE UNIQUE INDEX etapas_pkey ON public.etapas USING btree (id)"
  },
  {
    "schemaname": "public",
    "tablename": "etapas",
    "indexname": "idx_etapas_inmobiliaria",
    "indexdef": "CREATE INDEX idx_etapas_inmobiliaria ON public.etapas USING btree (inmobiliaria_id)"
  },
  {
    "schemaname": "public",
    "tablename": "etapas",
    "indexname": "idx_etapas_orden",
    "indexdef": "CREATE INDEX idx_etapas_orden ON public.etapas USING btree (orden)"
  },
  {
    "schemaname": "public",
    "tablename": "info_empresa",
    "indexname": "info_empresa_inmobiliaria_id_key",
    "indexdef": "CREATE UNIQUE INDEX info_empresa_inmobiliaria_id_key ON public.info_empresa USING btree (inmobiliaria_id)"
  },
  {
    "schemaname": "public",
    "tablename": "info_empresa",
    "indexname": "info_empresa_pkey",
    "indexdef": "CREATE UNIQUE INDEX info_empresa_pkey ON public.info_empresa USING btree (id)"
  },
  {
    "schemaname": "public",
    "tablename": "info_extra",
    "indexname": "idx_info_extra_inmobiliaria",
    "indexdef": "CREATE INDEX idx_info_extra_inmobiliaria ON public.info_extra USING btree (inmobiliaria_id)"
  },
  {
    "schemaname": "public",
    "tablename": "info_extra",
    "indexname": "info_extra_pkey",
    "indexdef": "CREATE UNIQUE INDEX info_extra_pkey ON public.info_extra USING btree (id)"
  },
  {
    "schemaname": "public",
    "tablename": "inmobiliarias",
    "indexname": "idx_inmobiliarias_nombre",
    "indexdef": "CREATE INDEX idx_inmobiliarias_nombre ON public.inmobiliarias USING btree (nombre)"
  },
  {
    "schemaname": "public",
    "tablename": "inmobiliarias",
    "indexname": "idx_inmobiliarias_telefono",
    "indexdef": "CREATE INDEX idx_inmobiliarias_telefono ON public.inmobiliarias USING btree (telefono)"
  },
  {
    "schemaname": "public",
    "tablename": "inmobiliarias",
    "indexname": "inmobiliarias_pkey",
    "indexdef": "CREATE UNIQUE INDEX inmobiliarias_pkey ON public.inmobiliarias USING btree (id)"
  },
  {
    "schemaname": "public",
    "tablename": "prospectos",
    "indexname": "idx_prospectos_etapa",
    "indexdef": "CREATE INDEX idx_prospectos_etapa ON public.prospectos USING btree (etapa_id)"
  },
  {
    "schemaname": "public",
    "tablename": "prospectos",
    "indexname": "idx_prospectos_fecha_seguimiento",
    "indexdef": "CREATE INDEX idx_prospectos_fecha_seguimiento ON public.prospectos USING btree (fecha_seguimiento)"
  },
  {
    "schemaname": "public",
    "tablename": "prospectos",
    "indexname": "idx_prospectos_inmobiliaria",
    "indexdef": "CREATE INDEX idx_prospectos_inmobiliaria ON public.prospectos USING btree (inmobiliaria_id)"
  },
  {
    "schemaname": "public",
    "tablename": "prospectos",
    "indexname": "idx_prospectos_proyecto",
    "indexdef": "CREATE INDEX idx_prospectos_proyecto ON public.prospectos USING btree (proyecto_id)"
  },
  {
    "schemaname": "public",
    "tablename": "prospectos",
    "indexname": "idx_prospectos_vendedor",
    "indexdef": "CREATE INDEX idx_prospectos_vendedor ON public.prospectos USING btree (vendedor_id)"
  },
  {
    "schemaname": "public",
    "tablename": "prospectos",
    "indexname": "prospectos_pkey",
    "indexdef": "CREATE UNIQUE INDEX prospectos_pkey ON public.prospectos USING btree (id)"
  },
  {
    "schemaname": "public",
    "tablename": "proyectos",
    "indexname": "idx_proyectos_inmobiliaria",
    "indexdef": "CREATE INDEX idx_proyectos_inmobiliaria ON public.proyectos USING btree (inmobiliaria_id)"
  },
  {
    "schemaname": "public",
    "tablename": "proyectos",
    "indexname": "idx_proyectos_nombre",
    "indexdef": "CREATE INDEX idx_proyectos_nombre ON public.proyectos USING btree (nombre)"
  },
  {
    "schemaname": "public",
    "tablename": "proyectos",
    "indexname": "proyectos_pkey",
    "indexdef": "CREATE UNIQUE INDEX proyectos_pkey ON public.proyectos USING btree (id)"
  },
  {
    "schemaname": "public",
    "tablename": "seguimientos",
    "indexname": "idx_seguimientos_fecha",
    "indexdef": "CREATE INDEX idx_seguimientos_fecha ON public.seguimientos USING btree (fecha)"
  },
  {
    "schemaname": "public",
    "tablename": "seguimientos",
    "indexname": "idx_seguimientos_prospecto",
    "indexdef": "CREATE INDEX idx_seguimientos_prospecto ON public.seguimientos USING btree (prospecto_id)"
  },
  {
    "schemaname": "public",
    "tablename": "seguimientos",
    "indexname": "idx_seguimientos_vendedor",
    "indexdef": "CREATE INDEX idx_seguimientos_vendedor ON public.seguimientos USING btree (vendedor_id)"
  },
  {
    "schemaname": "public",
    "tablename": "seguimientos",
    "indexname": "seguimientos_pkey",
    "indexdef": "CREATE UNIQUE INDEX seguimientos_pkey ON public.seguimientos USING btree (id)"
  },
  {
    "schemaname": "public",
    "tablename": "users",
    "indexname": "idx_users_email",
    "indexdef": "CREATE INDEX idx_users_email ON public.users USING btree (email)"
  },
  {
    "schemaname": "public",
    "tablename": "users",
    "indexname": "idx_users_inmobiliaria_id",
    "indexdef": "CREATE INDEX idx_users_inmobiliaria_id ON public.users USING btree (inmobiliaria_id)"
  },
  {
    "schemaname": "public",
    "tablename": "users",
    "indexname": "idx_users_name",
    "indexdef": "CREATE INDEX idx_users_name ON public.users USING btree (name)"
  },
  {
    "schemaname": "public",
    "tablename": "users",
    "indexname": "idx_users_role",
    "indexdef": "CREATE INDEX idx_users_role ON public.users USING btree (role)"
  },
  {
    "schemaname": "public",
    "tablename": "users",
    "indexname": "users_email_key",
    "indexdef": "CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email)"
  },
  {
    "schemaname": "public",
    "tablename": "users",
    "indexname": "users_pkey",
    "indexdef": "CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id)"
  },
  {
    "schemaname": "realtime",
    "tablename": "messages",
    "indexname": "messages_pkey",
    "indexdef": "CREATE UNIQUE INDEX messages_pkey ON ONLY realtime.messages USING btree (id, inserted_at)"
  },
  {
    "schemaname": "realtime",
    "tablename": "schema_migrations",
    "indexname": "schema_migrations_pkey",
    "indexdef": "CREATE UNIQUE INDEX schema_migrations_pkey ON realtime.schema_migrations USING btree (version)"
  },
  {
    "schemaname": "realtime",
    "tablename": "subscription",
    "indexname": "ix_realtime_subscription_entity",
    "indexdef": "CREATE INDEX ix_realtime_subscription_entity ON realtime.subscription USING btree (entity)"
  },
  {
    "schemaname": "realtime",
    "tablename": "subscription",
    "indexname": "pk_subscription",
    "indexdef": "CREATE UNIQUE INDEX pk_subscription ON realtime.subscription USING btree (id)"
  },
  {
    "schemaname": "realtime",
    "tablename": "subscription",
    "indexname": "subscription_subscription_id_entity_filters_key",
    "indexdef": "CREATE UNIQUE INDEX subscription_subscription_id_entity_filters_key ON realtime.subscription USING btree (subscription_id, entity, filters)"
  },
  {
    "schemaname": "storage",
    "tablename": "buckets",
    "indexname": "bname",
    "indexdef": "CREATE UNIQUE INDEX bname ON storage.buckets USING btree (name)"
  },
  {
    "schemaname": "storage",
    "tablename": "buckets",
    "indexname": "buckets_pkey",
    "indexdef": "CREATE UNIQUE INDEX buckets_pkey ON storage.buckets USING btree (id)"
  },
  {
    "schemaname": "storage",
    "tablename": "migrations",
    "indexname": "migrations_name_key",
    "indexdef": "CREATE UNIQUE INDEX migrations_name_key ON storage.migrations USING btree (name)"
  },
  {
    "schemaname": "storage",
    "tablename": "migrations",
    "indexname": "migrations_pkey",
    "indexdef": "CREATE UNIQUE INDEX migrations_pkey ON storage.migrations USING btree (id)"
  },
  {
    "schemaname": "storage",
    "tablename": "objects",
    "indexname": "bucketid_objname",
    "indexdef": "CREATE UNIQUE INDEX bucketid_objname ON storage.objects USING btree (bucket_id, name)"
  },
  {
    "schemaname": "storage",
    "tablename": "objects",
    "indexname": "idx_objects_bucket_id_name",
    "indexdef": "CREATE INDEX idx_objects_bucket_id_name ON storage.objects USING btree (bucket_id, name COLLATE \"C\")"
  },
  {
    "schemaname": "storage",
    "tablename": "objects",
    "indexname": "name_prefix_search",
    "indexdef": "CREATE INDEX name_prefix_search ON storage.objects USING btree (name text_pattern_ops)"
  },
  {
    "schemaname": "storage",
    "tablename": "objects",
    "indexname": "objects_pkey",
    "indexdef": "CREATE UNIQUE INDEX objects_pkey ON storage.objects USING btree (id)"
  },
  {
    "schemaname": "storage",
    "tablename": "s3_multipart_uploads",
    "indexname": "idx_multipart_uploads_list",
    "indexdef": "CREATE INDEX idx_multipart_uploads_list ON storage.s3_multipart_uploads USING btree (bucket_id, key, created_at)"
  },
  {
    "schemaname": "storage",
    "tablename": "s3_multipart_uploads",
    "indexname": "s3_multipart_uploads_pkey",
    "indexdef": "CREATE UNIQUE INDEX s3_multipart_uploads_pkey ON storage.s3_multipart_uploads USING btree (id)"
  },
  {
    "schemaname": "storage",
    "tablename": "s3_multipart_uploads_parts",
    "indexname": "s3_multipart_uploads_parts_pkey",
    "indexdef": "CREATE UNIQUE INDEX s3_multipart_uploads_parts_pkey ON storage.s3_multipart_uploads_parts USING btree (id)"
  },
  {
    "schemaname": "vault",
    "tablename": "secrets",
    "indexname": "secrets_name_idx",
    "indexdef": "CREATE UNIQUE INDEX secrets_name_idx ON vault.secrets USING btree (name) WHERE (name IS NOT NULL)"
  },
  {
    "schemaname": "vault",
    "tablename": "secrets",
    "indexname": "secrets_pkey",
    "indexdef": "CREATE UNIQUE INDEX secrets_pkey ON vault.secrets USING btree (id)"
  }
]

______

[
  {
    "schema_name": "auth",
    "function_name": "email",
    "definition": "CREATE OR REPLACE FUNCTION auth.email()\n RETURNS text\n LANGUAGE sql\n STABLE\nAS $function$\n  select \n  coalesce(\n    nullif(current_setting('request.jwt.claim.email', true), ''),\n    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'email')\n  )::text\n$function$\n"
  },
  {
    "schema_name": "auth",
    "function_name": "jwt",
    "definition": "CREATE OR REPLACE FUNCTION auth.jwt()\n RETURNS jsonb\n LANGUAGE sql\n STABLE\nAS $function$\n  select \n    coalesce(\n        nullif(current_setting('request.jwt.claim', true), ''),\n        nullif(current_setting('request.jwt.claims', true), '')\n    )::jsonb\n$function$\n"
  },
  {
    "schema_name": "auth",
    "function_name": "role",
    "definition": "CREATE OR REPLACE FUNCTION auth.role()\n RETURNS text\n LANGUAGE sql\n STABLE\nAS $function$\n  select \n  coalesce(\n    nullif(current_setting('request.jwt.claim.role', true), ''),\n    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role')\n  )::text\n$function$\n"
  },
  {
    "schema_name": "auth",
    "function_name": "uid",
    "definition": "CREATE OR REPLACE FUNCTION auth.uid()\n RETURNS uuid\n LANGUAGE sql\n STABLE\nAS $function$\n  select \n  coalesce(\n    nullif(current_setting('request.jwt.claim.sub', true), ''),\n    (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')\n  )::uuid\n$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "algorithm_sign",
    "definition": "CREATE OR REPLACE FUNCTION extensions.algorithm_sign(signables text, secret text, algorithm text)\n RETURNS text\n LANGUAGE sql\n IMMUTABLE\nAS $function$\nWITH\n  alg AS (\n    SELECT CASE\n      WHEN algorithm = 'HS256' THEN 'sha256'\n      WHEN algorithm = 'HS384' THEN 'sha384'\n      WHEN algorithm = 'HS512' THEN 'sha512'\n      ELSE '' END AS id)  -- hmac throws error\nSELECT extensions.url_encode(extensions.hmac(signables, secret, alg.id)) FROM alg;\n$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "armor",
    "definition": "CREATE OR REPLACE FUNCTION extensions.armor(bytea)\n RETURNS text\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_armor$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "armor",
    "definition": "CREATE OR REPLACE FUNCTION extensions.armor(bytea, text[], text[])\n RETURNS text\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_armor$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "crypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.crypt(text, text)\n RETURNS text\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_crypt$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "dearmor",
    "definition": "CREATE OR REPLACE FUNCTION extensions.dearmor(text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_dearmor$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "decrypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.decrypt(bytea, bytea, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_decrypt$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "decrypt_iv",
    "definition": "CREATE OR REPLACE FUNCTION extensions.decrypt_iv(bytea, bytea, bytea, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_decrypt_iv$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "digest",
    "definition": "CREATE OR REPLACE FUNCTION extensions.digest(text, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_digest$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "digest",
    "definition": "CREATE OR REPLACE FUNCTION extensions.digest(bytea, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_digest$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "encrypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.encrypt(bytea, bytea, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_encrypt$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "encrypt_iv",
    "definition": "CREATE OR REPLACE FUNCTION extensions.encrypt_iv(bytea, bytea, bytea, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_encrypt_iv$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "gen_random_bytes",
    "definition": "CREATE OR REPLACE FUNCTION extensions.gen_random_bytes(integer)\n RETURNS bytea\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_random_bytes$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "gen_random_uuid",
    "definition": "CREATE OR REPLACE FUNCTION extensions.gen_random_uuid()\n RETURNS uuid\n LANGUAGE c\n PARALLEL SAFE\nAS '$libdir/pgcrypto', $function$pg_random_uuid$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "gen_salt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.gen_salt(text, integer)\n RETURNS text\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_gen_salt_rounds$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "gen_salt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.gen_salt(text)\n RETURNS text\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_gen_salt$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "grant_pg_cron_access",
    "definition": "CREATE OR REPLACE FUNCTION extensions.grant_pg_cron_access()\n RETURNS event_trigger\n LANGUAGE plpgsql\nAS $function$\nBEGIN\n  IF EXISTS (\n    SELECT\n    FROM pg_event_trigger_ddl_commands() AS ev\n    JOIN pg_extension AS ext\n    ON ev.objid = ext.oid\n    WHERE ext.extname = 'pg_cron'\n  )\n  THEN\n    grant usage on schema cron to postgres with grant option;\n\n    alter default privileges in schema cron grant all on tables to postgres with grant option;\n    alter default privileges in schema cron grant all on functions to postgres with grant option;\n    alter default privileges in schema cron grant all on sequences to postgres with grant option;\n\n    alter default privileges for user supabase_admin in schema cron grant all\n        on sequences to postgres with grant option;\n    alter default privileges for user supabase_admin in schema cron grant all\n        on tables to postgres with grant option;\n    alter default privileges for user supabase_admin in schema cron grant all\n        on functions to postgres with grant option;\n\n    grant all privileges on all tables in schema cron to postgres with grant option;\n    revoke all on table cron.job from postgres;\n    grant select on table cron.job to postgres with grant option;\n  END IF;\nEND;\n$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "grant_pg_graphql_access",
    "definition": "CREATE OR REPLACE FUNCTION extensions.grant_pg_graphql_access()\n RETURNS event_trigger\n LANGUAGE plpgsql\nAS $function$\nDECLARE\n    func_is_graphql_resolve bool;\nBEGIN\n    func_is_graphql_resolve = (\n        SELECT n.proname = 'resolve'\n        FROM pg_event_trigger_ddl_commands() AS ev\n        LEFT JOIN pg_catalog.pg_proc AS n\n        ON ev.objid = n.oid\n    );\n\n    IF func_is_graphql_resolve\n    THEN\n        -- Update public wrapper to pass all arguments through to the pg_graphql resolve func\n        DROP FUNCTION IF EXISTS graphql_public.graphql;\n        create or replace function graphql_public.graphql(\n            \"operationName\" text default null,\n            query text default null,\n            variables jsonb default null,\n            extensions jsonb default null\n        )\n            returns jsonb\n            language sql\n        as $$\n            select graphql.resolve(\n                query := query,\n                variables := coalesce(variables, '{}'),\n                \"operationName\" := \"operationName\",\n                extensions := extensions\n            );\n        $$;\n\n        -- This hook executes when `graphql.resolve` is created. That is not necessarily the last\n        -- function in the extension so we need to grant permissions on existing entities AND\n        -- update default permissions to any others that are created after `graphql.resolve`\n        grant usage on schema graphql to postgres, anon, authenticated, service_role;\n        grant select on all tables in schema graphql to postgres, anon, authenticated, service_role;\n        grant execute on all functions in schema graphql to postgres, anon, authenticated, service_role;\n        grant all on all sequences in schema graphql to postgres, anon, authenticated, service_role;\n        alter default privileges in schema graphql grant all on tables to postgres, anon, authenticated, service_role;\n        alter default privileges in schema graphql grant all on functions to postgres, anon, authenticated, service_role;\n        alter default privileges in schema graphql grant all on sequences to postgres, anon, authenticated, service_role;\n\n        -- Allow postgres role to allow granting usage on graphql and graphql_public schemas to custom roles\n        grant usage on schema graphql_public to postgres with grant option;\n        grant usage on schema graphql to postgres with grant option;\n    END IF;\n\nEND;\n$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "grant_pg_net_access",
    "definition": "CREATE OR REPLACE FUNCTION extensions.grant_pg_net_access()\n RETURNS event_trigger\n LANGUAGE plpgsql\nAS $function$\nBEGIN\n  IF EXISTS (\n    SELECT 1\n    FROM pg_event_trigger_ddl_commands() AS ev\n    JOIN pg_extension AS ext\n    ON ev.objid = ext.oid\n    WHERE ext.extname = 'pg_net'\n  )\n  THEN\n    IF NOT EXISTS (\n      SELECT 1\n      FROM pg_roles\n      WHERE rolname = 'supabase_functions_admin'\n    )\n    THEN\n      CREATE USER supabase_functions_admin NOINHERIT CREATEROLE LOGIN NOREPLICATION;\n    END IF;\n\n    GRANT USAGE ON SCHEMA net TO supabase_functions_admin, postgres, anon, authenticated, service_role;\n\n    ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;\n    ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SECURITY DEFINER;\n\n    ALTER function net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;\n    ALTER function net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) SET search_path = net;\n\n    REVOKE ALL ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;\n    REVOKE ALL ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) FROM PUBLIC;\n\n    GRANT EXECUTE ON FUNCTION net.http_get(url text, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;\n    GRANT EXECUTE ON FUNCTION net.http_post(url text, body jsonb, params jsonb, headers jsonb, timeout_milliseconds integer) TO supabase_functions_admin, postgres, anon, authenticated, service_role;\n  END IF;\nEND;\n$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "hmac",
    "definition": "CREATE OR REPLACE FUNCTION extensions.hmac(bytea, bytea, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_hmac$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "hmac",
    "definition": "CREATE OR REPLACE FUNCTION extensions.hmac(text, text, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pg_hmac$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pg_stat_statements",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pg_stat_statements(showtext boolean, OUT userid oid, OUT dbid oid, OUT toplevel boolean, OUT queryid bigint, OUT query text, OUT plans bigint, OUT total_plan_time double precision, OUT min_plan_time double precision, OUT max_plan_time double precision, OUT mean_plan_time double precision, OUT stddev_plan_time double precision, OUT calls bigint, OUT total_exec_time double precision, OUT min_exec_time double precision, OUT max_exec_time double precision, OUT mean_exec_time double precision, OUT stddev_exec_time double precision, OUT rows bigint, OUT shared_blks_hit bigint, OUT shared_blks_read bigint, OUT shared_blks_dirtied bigint, OUT shared_blks_written bigint, OUT local_blks_hit bigint, OUT local_blks_read bigint, OUT local_blks_dirtied bigint, OUT local_blks_written bigint, OUT temp_blks_read bigint, OUT temp_blks_written bigint, OUT blk_read_time double precision, OUT blk_write_time double precision, OUT temp_blk_read_time double precision, OUT temp_blk_write_time double precision, OUT wal_records bigint, OUT wal_fpi bigint, OUT wal_bytes numeric, OUT jit_functions bigint, OUT jit_generation_time double precision, OUT jit_inlining_count bigint, OUT jit_inlining_time double precision, OUT jit_optimization_count bigint, OUT jit_optimization_time double precision, OUT jit_emission_count bigint, OUT jit_emission_time double precision)\n RETURNS SETOF record\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pg_stat_statements', $function$pg_stat_statements_1_10$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pg_stat_statements_info",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pg_stat_statements_info(OUT dealloc bigint, OUT stats_reset timestamp with time zone)\n RETURNS record\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pg_stat_statements', $function$pg_stat_statements_info$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pg_stat_statements_reset",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pg_stat_statements_reset(userid oid DEFAULT 0, dbid oid DEFAULT 0, queryid bigint DEFAULT 0)\n RETURNS void\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pg_stat_statements', $function$pg_stat_statements_reset_1_7$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_armor_headers",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_armor_headers(text, OUT key text, OUT value text)\n RETURNS SETOF record\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_armor_headers$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_key_id",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_key_id(bytea)\n RETURNS text\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_key_id_w$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_pub_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_pub_decrypt(bytea, bytea, text, text)\n RETURNS text\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_pub_decrypt_text$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_pub_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_pub_decrypt(bytea, bytea, text)\n RETURNS text\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_pub_decrypt_text$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_pub_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_pub_decrypt(bytea, bytea)\n RETURNS text\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_pub_decrypt_text$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_pub_decrypt_bytea",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_pub_decrypt_bytea(bytea, bytea, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_pub_decrypt_bytea$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_pub_decrypt_bytea",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_pub_decrypt_bytea(bytea, bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_pub_decrypt_bytea$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_pub_decrypt_bytea",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_pub_decrypt_bytea(bytea, bytea, text, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_pub_decrypt_bytea$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_pub_encrypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_pub_encrypt(text, bytea)\n RETURNS bytea\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_pub_encrypt_text$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_pub_encrypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_pub_encrypt(text, bytea, text)\n RETURNS bytea\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_pub_encrypt_text$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_pub_encrypt_bytea",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_pub_encrypt_bytea(bytea, bytea)\n RETURNS bytea\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_pub_encrypt_bytea$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_pub_encrypt_bytea",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_pub_encrypt_bytea(bytea, bytea, text)\n RETURNS bytea\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_pub_encrypt_bytea$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_sym_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_sym_decrypt(bytea, text, text)\n RETURNS text\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_sym_decrypt_text$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_sym_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_sym_decrypt(bytea, text)\n RETURNS text\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_sym_decrypt_text$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_sym_decrypt_bytea",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_sym_decrypt_bytea(bytea, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_sym_decrypt_bytea$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_sym_decrypt_bytea",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_sym_decrypt_bytea(bytea, text, text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_sym_decrypt_bytea$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_sym_encrypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_sym_encrypt(text, text, text)\n RETURNS bytea\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_sym_encrypt_text$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_sym_encrypt",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_sym_encrypt(text, text)\n RETURNS bytea\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_sym_encrypt_text$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_sym_encrypt_bytea",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_sym_encrypt_bytea(bytea, text, text)\n RETURNS bytea\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_sym_encrypt_bytea$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgp_sym_encrypt_bytea",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgp_sym_encrypt_bytea(bytea, text)\n RETURNS bytea\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/pgcrypto', $function$pgp_sym_encrypt_bytea$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgrst_ddl_watch",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgrst_ddl_watch()\n RETURNS event_trigger\n LANGUAGE plpgsql\nAS $function$\nDECLARE\n  cmd record;\nBEGIN\n  FOR cmd IN SELECT * FROM pg_event_trigger_ddl_commands()\n  LOOP\n    IF cmd.command_tag IN (\n      'CREATE SCHEMA', 'ALTER SCHEMA'\n    , 'CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO', 'ALTER TABLE'\n    , 'CREATE FOREIGN TABLE', 'ALTER FOREIGN TABLE'\n    , 'CREATE VIEW', 'ALTER VIEW'\n    , 'CREATE MATERIALIZED VIEW', 'ALTER MATERIALIZED VIEW'\n    , 'CREATE FUNCTION', 'ALTER FUNCTION'\n    , 'CREATE TRIGGER'\n    , 'CREATE TYPE', 'ALTER TYPE'\n    , 'CREATE RULE'\n    , 'COMMENT'\n    )\n    -- don't notify in case of CREATE TEMP table or other objects created on pg_temp\n    AND cmd.schema_name is distinct from 'pg_temp'\n    THEN\n      NOTIFY pgrst, 'reload schema';\n    END IF;\n  END LOOP;\nEND; $function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "pgrst_drop_watch",
    "definition": "CREATE OR REPLACE FUNCTION extensions.pgrst_drop_watch()\n RETURNS event_trigger\n LANGUAGE plpgsql\nAS $function$\nDECLARE\n  obj record;\nBEGIN\n  FOR obj IN SELECT * FROM pg_event_trigger_dropped_objects()\n  LOOP\n    IF obj.object_type IN (\n      'schema'\n    , 'table'\n    , 'foreign table'\n    , 'view'\n    , 'materialized view'\n    , 'function'\n    , 'trigger'\n    , 'type'\n    , 'rule'\n    )\n    AND obj.is_temporary IS false -- no pg_temp objects\n    THEN\n      NOTIFY pgrst, 'reload schema';\n    END IF;\n  END LOOP;\nEND; $function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "set_graphql_placeholder",
    "definition": "CREATE OR REPLACE FUNCTION extensions.set_graphql_placeholder()\n RETURNS event_trigger\n LANGUAGE plpgsql\nAS $function$\n    DECLARE\n    graphql_is_dropped bool;\n    BEGIN\n    graphql_is_dropped = (\n        SELECT ev.schema_name = 'graphql_public'\n        FROM pg_event_trigger_dropped_objects() AS ev\n        WHERE ev.schema_name = 'graphql_public'\n    );\n\n    IF graphql_is_dropped\n    THEN\n        create or replace function graphql_public.graphql(\n            \"operationName\" text default null,\n            query text default null,\n            variables jsonb default null,\n            extensions jsonb default null\n        )\n            returns jsonb\n            language plpgsql\n        as $$\n            DECLARE\n                server_version float;\n            BEGIN\n                server_version = (SELECT (SPLIT_PART((select version()), ' ', 2))::float);\n\n                IF server_version >= 14 THEN\n                    RETURN jsonb_build_object(\n                        'errors', jsonb_build_array(\n                            jsonb_build_object(\n                                'message', 'pg_graphql extension is not enabled.'\n                            )\n                        )\n                    );\n                ELSE\n                    RETURN jsonb_build_object(\n                        'errors', jsonb_build_array(\n                            jsonb_build_object(\n                                'message', 'pg_graphql is only available on projects running Postgres 14 onwards.'\n                            )\n                        )\n                    );\n                END IF;\n            END;\n        $$;\n    END IF;\n\n    END;\n$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "sign",
    "definition": "CREATE OR REPLACE FUNCTION extensions.sign(payload json, secret text, algorithm text DEFAULT 'HS256'::text)\n RETURNS text\n LANGUAGE sql\n IMMUTABLE\nAS $function$\nWITH\n  header AS (\n    SELECT extensions.url_encode(convert_to('{\"alg\":\"' || algorithm || '\",\"typ\":\"JWT\"}', 'utf8')) AS data\n    ),\n  payload AS (\n    SELECT extensions.url_encode(convert_to(payload::text, 'utf8')) AS data\n    ),\n  signables AS (\n    SELECT header.data || '.' || payload.data AS data FROM header, payload\n    )\nSELECT\n    signables.data || '.' ||\n    extensions.algorithm_sign(signables.data, secret, algorithm) FROM signables;\n$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "try_cast_double",
    "definition": "CREATE OR REPLACE FUNCTION extensions.try_cast_double(inp text)\n RETURNS double precision\n LANGUAGE plpgsql\n IMMUTABLE\nAS $function$\n  BEGIN\n    BEGIN\n      RETURN inp::double precision;\n    EXCEPTION\n      WHEN OTHERS THEN RETURN NULL;\n    END;\n  END;\n$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "url_decode",
    "definition": "CREATE OR REPLACE FUNCTION extensions.url_decode(data text)\n RETURNS bytea\n LANGUAGE sql\n IMMUTABLE\nAS $function$\nWITH t AS (SELECT translate(data, '-_', '+/') AS trans),\n     rem AS (SELECT length(t.trans) % 4 AS remainder FROM t) -- compute padding size\n    SELECT decode(\n        t.trans ||\n        CASE WHEN rem.remainder > 0\n           THEN repeat('=', (4 - rem.remainder))\n           ELSE '' END,\n    'base64') FROM t, rem;\n$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "url_encode",
    "definition": "CREATE OR REPLACE FUNCTION extensions.url_encode(data bytea)\n RETURNS text\n LANGUAGE sql\n IMMUTABLE\nAS $function$\n    SELECT translate(encode(data, 'base64'), E'+/=\\n', '-_');\n$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "uuid_generate_v1",
    "definition": "CREATE OR REPLACE FUNCTION extensions.uuid_generate_v1()\n RETURNS uuid\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/uuid-ossp', $function$uuid_generate_v1$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "uuid_generate_v1mc",
    "definition": "CREATE OR REPLACE FUNCTION extensions.uuid_generate_v1mc()\n RETURNS uuid\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/uuid-ossp', $function$uuid_generate_v1mc$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "uuid_generate_v3",
    "definition": "CREATE OR REPLACE FUNCTION extensions.uuid_generate_v3(namespace uuid, name text)\n RETURNS uuid\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/uuid-ossp', $function$uuid_generate_v3$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "uuid_generate_v4",
    "definition": "CREATE OR REPLACE FUNCTION extensions.uuid_generate_v4()\n RETURNS uuid\n LANGUAGE c\n PARALLEL SAFE STRICT\nAS '$libdir/uuid-ossp', $function$uuid_generate_v4$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "uuid_generate_v5",
    "definition": "CREATE OR REPLACE FUNCTION extensions.uuid_generate_v5(namespace uuid, name text)\n RETURNS uuid\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/uuid-ossp', $function$uuid_generate_v5$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "uuid_nil",
    "definition": "CREATE OR REPLACE FUNCTION extensions.uuid_nil()\n RETURNS uuid\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/uuid-ossp', $function$uuid_nil$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "uuid_ns_dns",
    "definition": "CREATE OR REPLACE FUNCTION extensions.uuid_ns_dns()\n RETURNS uuid\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/uuid-ossp', $function$uuid_ns_dns$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "uuid_ns_oid",
    "definition": "CREATE OR REPLACE FUNCTION extensions.uuid_ns_oid()\n RETURNS uuid\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/uuid-ossp', $function$uuid_ns_oid$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "uuid_ns_url",
    "definition": "CREATE OR REPLACE FUNCTION extensions.uuid_ns_url()\n RETURNS uuid\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/uuid-ossp', $function$uuid_ns_url$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "uuid_ns_x500",
    "definition": "CREATE OR REPLACE FUNCTION extensions.uuid_ns_x500()\n RETURNS uuid\n LANGUAGE c\n IMMUTABLE PARALLEL SAFE STRICT\nAS '$libdir/uuid-ossp', $function$uuid_ns_x500$function$\n"
  },
  {
    "schema_name": "extensions",
    "function_name": "verify",
    "definition": "CREATE OR REPLACE FUNCTION extensions.verify(token text, secret text, algorithm text DEFAULT 'HS256'::text)\n RETURNS TABLE(header json, payload json, valid boolean)\n LANGUAGE sql\n IMMUTABLE\nAS $function$\n  SELECT\n    jwt.header AS header,\n    jwt.payload AS payload,\n    jwt.signature_ok AND tstzrange(\n      to_timestamp(extensions.try_cast_double(jwt.payload->>'nbf')),\n      to_timestamp(extensions.try_cast_double(jwt.payload->>'exp'))\n    ) @> CURRENT_TIMESTAMP AS valid\n  FROM (\n    SELECT\n      convert_from(extensions.url_decode(r[1]), 'utf8')::json AS header,\n      convert_from(extensions.url_decode(r[2]), 'utf8')::json AS payload,\n      r[3] = extensions.algorithm_sign(r[1] || '.' || r[2], secret, algorithm) AS signature_ok\n    FROM regexp_split_to_array(token, '\\.') r\n  ) jwt\n$function$\n"
  },
  {
    "schema_name": "graphql",
    "function_name": "_internal_resolve",
    "definition": "CREATE OR REPLACE FUNCTION graphql._internal_resolve(query text, variables jsonb DEFAULT '{}'::jsonb, \"operationName\" text DEFAULT NULL::text, extensions jsonb DEFAULT NULL::jsonb)\n RETURNS jsonb\n LANGUAGE c\nAS '$libdir/pg_graphql', $function$resolve_wrapper$function$\n"
  },
  {
    "schema_name": "graphql",
    "function_name": "comment_directive",
    "definition": "CREATE OR REPLACE FUNCTION graphql.comment_directive(comment_ text)\n RETURNS jsonb\n LANGUAGE sql\n IMMUTABLE\nAS $function$\n    /*\n    comment on column public.account.name is '@graphql.name: myField'\n    */\n    select\n        coalesce(\n            (\n                regexp_match(\n                    comment_,\n                    '@graphql\\((.+)\\)'\n                )\n            )[1]::jsonb,\n            jsonb_build_object()\n        )\n$function$\n"
  },
  {
    "schema_name": "graphql",
    "function_name": "exception",
    "definition": "CREATE OR REPLACE FUNCTION graphql.exception(message text)\n RETURNS text\n LANGUAGE plpgsql\nAS $function$\nbegin\n    raise exception using errcode='22000', message=message;\nend;\n$function$\n"
  },
  {
    "schema_name": "graphql",
    "function_name": "get_schema_version",
    "definition": "CREATE OR REPLACE FUNCTION graphql.get_schema_version()\n RETURNS integer\n LANGUAGE sql\n SECURITY DEFINER\nAS $function$\n    select last_value from graphql.seq_schema_version;\n$function$\n"
  },
  {
    "schema_name": "graphql",
    "function_name": "increment_schema_version",
    "definition": "CREATE OR REPLACE FUNCTION graphql.increment_schema_version()\n RETURNS event_trigger\n LANGUAGE plpgsql\n SECURITY DEFINER\nAS $function$\nbegin\n    perform nextval('graphql.seq_schema_version');\nend;\n$function$\n"
  },
  {
    "schema_name": "graphql",
    "function_name": "resolve",
    "definition": "CREATE OR REPLACE FUNCTION graphql.resolve(query text, variables jsonb DEFAULT '{}'::jsonb, \"operationName\" text DEFAULT NULL::text, extensions jsonb DEFAULT NULL::jsonb)\n RETURNS jsonb\n LANGUAGE plpgsql\nAS $function$\ndeclare\n    res jsonb;\n    message_text text;\nbegin\n  begin\n    select graphql._internal_resolve(\"query\" := \"query\",\n                                     \"variables\" := \"variables\",\n                                     \"operationName\" := \"operationName\",\n                                     \"extensions\" := \"extensions\") into res;\n    return res;\n  exception\n    when others then\n    get stacked diagnostics message_text = message_text;\n    return\n    jsonb_build_object('data', null,\n                       'errors', jsonb_build_array(jsonb_build_object('message', message_text)));\n  end;\nend;\n$function$\n"
  },
  {
    "schema_name": "graphql_public",
    "function_name": "graphql",
    "definition": "CREATE OR REPLACE FUNCTION graphql_public.graphql(\"operationName\" text DEFAULT NULL::text, query text DEFAULT NULL::text, variables jsonb DEFAULT NULL::jsonb, extensions jsonb DEFAULT NULL::jsonb)\n RETURNS jsonb\n LANGUAGE sql\nAS $function$\n            select graphql.resolve(\n                query := query,\n                variables := coalesce(variables, '{}'),\n                \"operationName\" := \"operationName\",\n                extensions := extensions\n            );\n        $function$\n"
  },
  {
    "schema_name": "pgbouncer",
    "function_name": "get_auth",
    "definition": "CREATE OR REPLACE FUNCTION pgbouncer.get_auth(p_usename text)\n RETURNS TABLE(username text, password text)\n LANGUAGE plpgsql\n SECURITY DEFINER\nAS $function$\nBEGIN\n    RAISE WARNING 'PgBouncer auth request: %', p_usename;\n\n    RETURN QUERY\n    SELECT usename::TEXT, passwd::TEXT FROM pg_catalog.pg_shadow\n    WHERE usename = p_usename;\nEND;\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "create_key",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.create_key(key_type pgsodium.key_type DEFAULT 'aead-det'::pgsodium.key_type, name text DEFAULT NULL::text, raw_key bytea DEFAULT NULL::bytea, raw_key_nonce bytea DEFAULT NULL::bytea, parent_key uuid DEFAULT NULL::uuid, key_context bytea DEFAULT '\\x7067736f6469756d'::bytea, expires timestamp with time zone DEFAULT NULL::timestamp with time zone, associated_data text DEFAULT ''::text)\n RETURNS pgsodium.valid_key\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  new_key pgsodium.key;\n  valid_key pgsodium.valid_key;\nBEGIN\n  INSERT INTO pgsodium.key (key_id, key_context, key_type, raw_key,\n  raw_key_nonce, parent_key, expires, name, associated_data)\n      VALUES (\n        CASE WHEN raw_key IS NULL THEN\n            NEXTVAL('pgsodium.key_key_id_seq'::REGCLASS)\n        ELSE NULL END,\n        CASE WHEN raw_key IS NULL THEN\n            key_context\n        ELSE NULL END,\n        key_type,\n        raw_key,\n        CASE WHEN raw_key IS NOT NULL THEN\n            COALESCE(raw_key_nonce, pgsodium.crypto_aead_det_noncegen())\n        ELSE NULL END,\n        CASE WHEN parent_key IS NULL and raw_key IS NOT NULL THEN\n            (pgsodium.create_key('aead-det')).id\n        ELSE parent_key END,\n        expires,\n        name,\n        associated_data)\n    RETURNING * INTO new_key;\n  SELECT * INTO valid_key FROM pgsodium.valid_key WHERE id = new_key.id;\n  RETURN valid_key;\nEND;\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "create_mask_view",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.create_mask_view(relid oid, debug boolean DEFAULT false)\n RETURNS void\n LANGUAGE plpgsql\n SET search_path TO 'pg_catalog'\nAS $function$\nDECLARE\n  body text;\n  source_name text;\n  view_name text;\n  rule pgsodium.masking_rule;\nBEGIN\n  SELECT DISTINCT(quote_ident(relname)) INTO STRICT view_name\n    FROM pg_class c, pg_seclabel sl\n   WHERE relid = c.oid\n     AND sl.classoid = c.tableoid\n     AND sl.objoid = c.oid;\n\n  source_name := relid::regclass;\n\n  body = format(\n    $c$\n    DROP VIEW IF EXISTS pgsodium_masks.%s;\n    CREATE VIEW pgsodium_masks.%s AS SELECT %s\n    FROM %s;\n    $c$,\n    view_name,\n    view_name,\n    pgsodium.decrypted_columns(relid),\n    source_name\n  );\n  IF debug THEN\n    RAISE NOTICE '%', body;\n  END IF;\n  EXECUTE body;\n\n  body = format(\n    $c$\n    CREATE OR REPLACE FUNCTION pgsodium_masks.%s_encrypt_secret()\n      RETURNS TRIGGER\n      LANGUAGE plpgsql\n      AS $t$\n    BEGIN\n    %s;\n    RETURN new;\n    END;\n    $t$;\n\n    DROP TRIGGER IF EXISTS %s_encrypt_secret_trigger ON %s;\n\n    CREATE TRIGGER %s_encrypt_secret_trigger\n      BEFORE INSERT ON %s\n      FOR EACH ROW\n      EXECUTE FUNCTION pgsodium_masks.%s_encrypt_secret ();\n    $c$,\n    view_name,\n    pgsodium.encrypted_columns(relid),\n    view_name,\n    source_name,\n    view_name,\n    source_name,\n    view_name\n  );\n  if debug THEN\n    RAISE NOTICE '%', body;\n  END IF;\n  EXECUTE body;\n\n  PERFORM pgsodium.mask_role(oid::regrole, source_name, view_name)\n  FROM pg_roles WHERE pgsodium.has_mask(oid::regrole, source_name);\n\n  RETURN;\nEND\n  $function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "create_mask_view",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.create_mask_view(relid oid, subid integer, debug boolean DEFAULT false)\n RETURNS void\n LANGUAGE plpgsql\n SET search_path TO 'pg_catalog'\nAS $function$\nDECLARE\n  m record;\n  body text;\n  source_name text;\n  view_owner regrole = session_user;\n  rule pgsodium.masking_rule;\n  privs aclitem[];\n  priv record;\nBEGIN\n  SELECT DISTINCT * INTO STRICT rule FROM pgsodium.masking_rule WHERE attrelid = relid AND attnum = subid;\n\n  source_name := relid::regclass::text;\n\n  BEGIN\n    SELECT relacl INTO STRICT privs FROM pg_catalog.pg_class WHERE oid = rule.view_name::regclass::oid;\n  EXCEPTION\n\tWHEN undefined_table THEN\n      SELECT relacl INTO STRICT privs FROM pg_catalog.pg_class WHERE oid = relid;\n  END;\n\n  body = format(\n    $c$\n    DROP VIEW IF EXISTS %1$s;\n    CREATE VIEW %1$s %5$s AS SELECT %2$s\n    FROM %3$s;\n    ALTER VIEW %1$s OWNER TO %4$s;\n    $c$,\n    rule.view_name,\n    pgsodium.decrypted_columns(relid),\n    source_name,\n    view_owner,\n    CASE WHEN rule.security_invoker THEN 'WITH (security_invoker=true)' ELSE '' END\n  );\n  IF debug THEN\n    RAISE NOTICE '%', body;\n  END IF;\n  EXECUTE body;\n\n  FOR priv IN SELECT * FROM pg_catalog.aclexplode(privs) LOOP\n\tbody = format(\n\t  $c$\n\t  GRANT %s ON %s TO %s;\n\t  $c$,\n\t  priv.privilege_type,\n\t  rule.view_name,\n\t  priv.grantee::regrole::text\n\t);\n\tIF debug THEN\n\t  RAISE NOTICE '%', body;\n\tEND IF;\n\tEXECUTE body;\n  END LOOP;\n\n  FOR m IN SELECT * FROM pgsodium.mask_columns where attrelid = relid LOOP\n\tIF m.key_id IS NULL AND m.key_id_column is NULL THEN\n\t  CONTINUE;\n\tELSE\n\t  body = format(\n\t\t$c$\n\t\tDROP FUNCTION IF EXISTS %1$s.\"%2$s_encrypt_secret_%3$s\"() CASCADE;\n\n\t\tCREATE OR REPLACE FUNCTION %1$s.\"%2$s_encrypt_secret_%3$s\"()\n\t\t  RETURNS TRIGGER\n\t\t  LANGUAGE plpgsql\n\t\t  AS $t$\n\t\tBEGIN\n\t\t%4$s;\n\t\tRETURN new;\n\t\tEND;\n\t\t$t$;\n\n\t\tALTER FUNCTION  %1$s.\"%2$s_encrypt_secret_%3$s\"() OWNER TO %5$s;\n\n\t\tDROP TRIGGER IF EXISTS \"%2$s_encrypt_secret_trigger_%3$s\" ON %6$s;\n\n\t\tCREATE TRIGGER \"%2$s_encrypt_secret_trigger_%3$s\"\n\t\t  BEFORE INSERT OR UPDATE OF \"%3$s\" ON %6$s\n\t\t  FOR EACH ROW\n\t\t  EXECUTE FUNCTION %1$s.\"%2$s_encrypt_secret_%3$s\" ();\n\t\t  $c$,\n\t\trule.relnamespace,\n\t\trule.relname,\n\t\tm.attname,\n\t\tpgsodium.encrypted_column(relid, m),\n\t\tview_owner,\n\t\tsource_name\n\t  );\n\t  if debug THEN\n\t\tRAISE NOTICE '%', body;\n\t  END IF;\n\t  EXECUTE body;\n\tEND IF;\n  END LOOP;\n\n  raise notice 'about to masking role % %', source_name, rule.view_name;\n  PERFORM pgsodium.mask_role(oid::regrole, source_name, rule.view_name)\n  FROM pg_roles WHERE pgsodium.has_mask(oid::regrole, source_name);\n\n  RETURN;\nEND\n  $function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_det_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_det_decrypt(message bytea, additional bytea, key_uuid uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'aead-det';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_aead_det_decrypt(message, additional, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_aead_det_decrypt(message, additional, key.key_id, key.key_context);\nEND;\n  $function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_det_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_det_decrypt(message bytea, additional bytea, key_uuid uuid, nonce bytea)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'aead-det';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_aead_det_decrypt(message, additional, key.decrypted_raw_key, nonce);\n  END IF;\n  RETURN pgsodium.crypto_aead_det_decrypt(message, additional, key.key_id, key.key_context, nonce);\nEND;\n  $function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_det_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_det_decrypt(message bytea, additional bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea, nonce bytea DEFAULT NULL::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_det_decrypt_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_det_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_det_decrypt(ciphertext bytea, additional bytea, key bytea, nonce bytea DEFAULT NULL::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_det_decrypt$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_det_encrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_det_encrypt(message bytea, additional bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea, nonce bytea DEFAULT NULL::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_det_encrypt_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_det_encrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_det_encrypt(message bytea, additional bytea, key bytea, nonce bytea DEFAULT NULL::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_det_encrypt$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_det_encrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_det_encrypt(message bytea, additional bytea, key_uuid uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'aead-det';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_aead_det_encrypt(message, additional, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_aead_det_encrypt(message, additional, key.key_id, key.key_context);\nEND;\n  $function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_det_encrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_det_encrypt(message bytea, additional bytea, key_uuid uuid, nonce bytea)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'aead-det';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_aead_det_encrypt(message, additional, key.decrypted_raw_key, nonce);\n  END IF;\n  RETURN pgsodium.crypto_aead_det_encrypt(message, additional, key.key_id, key.key_context, nonce);\nEND;\n  $function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_det_keygen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_det_keygen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_det_keygen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_det_noncegen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_det_noncegen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_det_noncegen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_ietf_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_ietf_decrypt(message bytea, additional bytea, nonce bytea, key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_ietf_decrypt$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_ietf_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_ietf_decrypt(message bytea, additional bytea, nonce bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_ietf_decrypt_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_ietf_decrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_ietf_decrypt(message bytea, additional bytea, nonce bytea, key_uuid uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'aead-ietf';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_aead_ietf_decrypt(message, additional, nonce, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_aead_ietf_decrypt(message, additional, nonce, key.key_id, key.key_context);\nEND;\n  $function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_ietf_encrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_ietf_encrypt(message bytea, additional bytea, nonce bytea, key_uuid uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'aead-ietf';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_aead_ietf_encrypt(message, additional, nonce, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_aead_ietf_encrypt(message, additional, nonce, key.key_id, key.key_context);\nEND;\n  $function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_ietf_encrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_ietf_encrypt(message bytea, additional bytea, nonce bytea, key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_ietf_encrypt$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_ietf_encrypt",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_ietf_encrypt(message bytea, additional bytea, nonce bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_ietf_encrypt_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_ietf_keygen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_ietf_keygen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_ietf_keygen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_aead_ietf_noncegen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_aead_ietf_noncegen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_aead_ietf_noncegen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth(message bytea, key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth(message bytea, key_uuid uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'auth';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_auth(message, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_auth(message, key.key_id, key.key_context);\nEND;\n\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth(message bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha256",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha256(message bytea, secret bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_hmacsha256$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha256",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha256(message bytea, key_uuid uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'hmacsha256';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_auth_hmacsha256(message, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_auth_hmacsha256(message, key.key_id, key.key_context);\nEND;\n\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha256",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha256(message bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_hmacsha256_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha256_keygen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha256_keygen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_hmacsha256_keygen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha256_verify",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha256_verify(hash bytea, message bytea, secret bytea)\n RETURNS boolean\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_hmacsha256_verify$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha256_verify",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha256_verify(signature bytea, message bytea, key_uuid uuid)\n RETURNS boolean\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'hmacsha256';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_auth_hmacsha256_verify(signature, message, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_auth_hmacsha256_verify(signature, message, key.key_id, key.key_context);\nEND;\n\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha256_verify",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha256_verify(hash bytea, message bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS boolean\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_hmacsha256_verify_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha512",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha512(message bytea, key_uuid uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'hmacsha512';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_auth_hmacsha512(message, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_auth_hmacsha512(message, key.key_id, key.key_context);\nEND;\n\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha512",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha512(message bytea, secret bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_hmacsha512$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha512",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha512(message bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_hmacsha512_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha512_keygen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha512_keygen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_hmacsha512_keygen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha512_verify",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha512_verify(signature bytea, message bytea, key_uuid uuid)\n RETURNS boolean\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'hmacsha512';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_auth_hmacsha512_verify(signature, message, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_auth_hmacsha512_verify(signature, message, key.key_id, key.key_context);\nEND;\n\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha512_verify",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha512_verify(hash bytea, message bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS boolean\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_hmacsha512_verify_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_hmacsha512_verify",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_hmacsha512_verify(hash bytea, message bytea, secret bytea)\n RETURNS boolean\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_hmacsha512_verify$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_keygen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_keygen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_keygen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_verify",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_verify(mac bytea, message bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS boolean\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_verify_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_verify",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_verify(mac bytea, message bytea, key_uuid uuid)\n RETURNS boolean\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'auth';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_auth_verify(mac, message, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_auth_verify(mac, message, key.key_id, key.key_context);\nEND;\n\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_auth_verify",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_auth_verify(mac bytea, message bytea, key bytea)\n RETURNS boolean\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_auth_verify$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_box",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_box(message bytea, nonce bytea, public bytea, secret bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_box$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_box_new_keypair",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_box_new_keypair()\n RETURNS pgsodium.crypto_box_keypair\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_box_keypair$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_box_new_seed",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_box_new_seed()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_box_new_seed$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_box_noncegen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_box_noncegen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_box_noncegen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_box_open",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_box_open(ciphertext bytea, nonce bytea, public bytea, secret bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_box_open$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_box_seal",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_box_seal(message bytea, public_key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_box_seal$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_box_seal_open",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_box_seal_open(ciphertext bytea, public_key bytea, secret_key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_box_seal_open$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_box_seed_new_keypair",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_box_seed_new_keypair(seed bytea)\n RETURNS pgsodium.crypto_box_keypair\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_box_seed_keypair$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_cmp",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_cmp(text, text)\n RETURNS boolean\n LANGUAGE c\n IMMUTABLE STRICT\nAS '$libdir/pgsodium', $function$pgsodium_cmp$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_generichash",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_generichash(message bytea, key bytea DEFAULT NULL::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_generichash$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_generichash",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_generichash(message bytea, key_uuid uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'generichash';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_generichash(message, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_generichash(message, key.key_id, key.key_context);\nEND;\n\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_generichash",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_generichash(message bytea, key bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_generichash_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_generichash_keygen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_generichash_keygen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_generichash_keygen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_hash_sha256",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_hash_sha256(message bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_hash_sha256$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_hash_sha512",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_hash_sha512(message bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_hash_sha512$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_kdf_derive_from_key",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_kdf_derive_from_key(subkey_size integer, subkey_id bigint, context bytea, primary_key uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE STRICT SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = primary_key AND key_type = 'kdf';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_kdf_derive_from_key(subkey_size, subkey_id, context, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.derive_key(key.key_id, subkey_size, key.key_context);\nEND;\n\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_kdf_derive_from_key",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_kdf_derive_from_key(subkey_size bigint, subkey_id bigint, context bytea, primary_key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_kdf_derive_from_key$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_kdf_keygen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_kdf_keygen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_kdf_keygen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_kx_client_session_keys",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_kx_client_session_keys(client_pk bytea, client_sk bytea, server_pk bytea)\n RETURNS pgsodium.crypto_kx_session\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_kx_client_session_keys$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_kx_new_keypair",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_kx_new_keypair()\n RETURNS pgsodium.crypto_kx_keypair\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_kx_keypair$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_kx_new_seed",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_kx_new_seed()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_kx_new_seed$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_kx_seed_new_keypair",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_kx_seed_new_keypair(seed bytea)\n RETURNS pgsodium.crypto_kx_keypair\n LANGUAGE c\n IMMUTABLE STRICT\nAS '$libdir/pgsodium', $function$pgsodium_crypto_kx_seed_keypair$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_kx_server_session_keys",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_kx_server_session_keys(server_pk bytea, server_sk bytea, client_pk bytea)\n RETURNS pgsodium.crypto_kx_session\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_kx_server_session_keys$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_pwhash",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_pwhash(password bytea, salt bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_pwhash$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_pwhash_saltgen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_pwhash_saltgen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_pwhash_saltgen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_pwhash_str",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_pwhash_str(password bytea)\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_pwhash_str$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_pwhash_str_verify",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_pwhash_str_verify(hashed_password bytea, password bytea)\n RETURNS boolean\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_pwhash_str_verify$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_secretbox",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_secretbox(message bytea, nonce bytea, key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_secretbox$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_secretbox",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_secretbox(message bytea, nonce bytea, key_uuid uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'secretbox';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_secretbox(message, nonce, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_secretbox(message, nonce, key.key_id, key.key_context);\nEND;\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_secretbox",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_secretbox(message bytea, nonce bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_secretbox_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_secretbox_keygen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_secretbox_keygen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_secretbox_keygen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_secretbox_noncegen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_secretbox_noncegen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_secretbox_noncegen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_secretbox_open",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_secretbox_open(ciphertext bytea, nonce bytea, key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_secretbox_open$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_secretbox_open",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_secretbox_open(message bytea, nonce bytea, key_id bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_secretbox_open_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_secretbox_open",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_secretbox_open(message bytea, nonce bytea, key_uuid uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'secretbox';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_secretbox_open(message, nonce, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_secretbox_open(message, nonce, key.key_id, key.key_context);\nEND;\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_secretstream_keygen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_secretstream_keygen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_secretstream_xchacha20poly1305_keygen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_shorthash",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_shorthash(message bytea, key bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_shorthash_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_shorthash",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_shorthash(message bytea, key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_shorthash$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_shorthash",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_shorthash(message bytea, key_uuid uuid)\n RETURNS bytea\n LANGUAGE plpgsql\n STABLE SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n  key pgsodium.decrypted_key;\nBEGIN\n  SELECT * INTO STRICT key\n    FROM pgsodium.decrypted_key v\n  WHERE id = key_uuid AND key_type = 'shorthash';\n\n  IF key.decrypted_raw_key IS NOT NULL THEN\n    RETURN pgsodium.crypto_shorthash(message, key.decrypted_raw_key);\n  END IF;\n  RETURN pgsodium.crypto_shorthash(message, key.key_id, key.key_context);\nEND;\n\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_shorthash_keygen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_shorthash_keygen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_shorthash_keygen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign(message bytea, key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_sign$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_detached",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_detached(message bytea, key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_sign_detached$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_final_create",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_final_create(state bytea, key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_sign_final_create$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_final_verify",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_final_verify(state bytea, signature bytea, key bytea)\n RETURNS boolean\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_sign_final_verify$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_init",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_init()\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE STRICT\nAS '$libdir/pgsodium', $function$pgsodium_crypto_sign_init$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_new_keypair",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_new_keypair()\n RETURNS pgsodium.crypto_sign_keypair\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_sign_keypair$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_new_seed",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_new_seed()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_sign_new_seed$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_open",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_open(signed_message bytea, key bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_sign_open$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_seed_new_keypair",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_seed_new_keypair(seed bytea)\n RETURNS pgsodium.crypto_sign_keypair\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_sign_seed_keypair$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_update",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_update(state bytea, message bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_sign_update$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_update_agg1",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_update_agg1(state bytea, message bytea)\n RETURNS bytea\n LANGUAGE sql\n IMMUTABLE\nAS $function$\n SELECT pgsodium.crypto_sign_update(COALESCE(state, pgsodium.crypto_sign_init()), message);\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_update_agg2",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_update_agg2(cur_state bytea, initial_state bytea, message bytea)\n RETURNS bytea\n LANGUAGE sql\n IMMUTABLE\nAS $function$\n SELECT pgsodium.crypto_sign_update(\n       COALESCE(cur_state, initial_state),\n\t   message)\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_sign_verify_detached",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_sign_verify_detached(sig bytea, message bytea, key bytea)\n RETURNS boolean\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_sign_verify_detached$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_signcrypt_new_keypair",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_signcrypt_new_keypair()\n RETURNS pgsodium.crypto_signcrypt_keypair\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_signcrypt_keypair$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_signcrypt_sign_after",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_signcrypt_sign_after(state bytea, sender_sk bytea, ciphertext bytea)\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_signcrypt_sign_after$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_signcrypt_sign_before",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_signcrypt_sign_before(sender bytea, recipient bytea, sender_sk bytea, recipient_pk bytea, additional bytea)\n RETURNS pgsodium.crypto_signcrypt_state_key\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_signcrypt_sign_before$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_signcrypt_verify_after",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_signcrypt_verify_after(state bytea, signature bytea, sender_pk bytea, ciphertext bytea)\n RETURNS boolean\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_signcrypt_verify_after$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_signcrypt_verify_before",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_signcrypt_verify_before(signature bytea, sender bytea, recipient bytea, additional bytea, sender_pk bytea, recipient_sk bytea)\n RETURNS pgsodium.crypto_signcrypt_state_key\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_signcrypt_verify_before$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_signcrypt_verify_public",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_signcrypt_verify_public(signature bytea, sender bytea, recipient bytea, additional bytea, sender_pk bytea, ciphertext bytea)\n RETURNS boolean\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_signcrypt_verify_public$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_stream_xchacha20",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_stream_xchacha20(bigint, bytea, bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_stream_xchacha20$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_stream_xchacha20",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_stream_xchacha20(bigint, bytea, bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_stream_xchacha20_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_stream_xchacha20_keygen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_stream_xchacha20_keygen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_stream_xchacha20_keygen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_stream_xchacha20_noncegen",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_stream_xchacha20_noncegen()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_crypto_stream_xchacha20_noncegen$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_stream_xchacha20_xor",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_stream_xchacha20_xor(bytea, bytea, bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_stream_xchacha20_xor$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_stream_xchacha20_xor",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_stream_xchacha20_xor(bytea, bytea, bigint, context bytea DEFAULT '\\x70676f736469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_stream_xchacha20_xor_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_stream_xchacha20_xor_ic",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_stream_xchacha20_xor_ic(bytea, bytea, bigint, bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_stream_xchacha20_xor_ic$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "crypto_stream_xchacha20_xor_ic",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.crypto_stream_xchacha20_xor_ic(bytea, bytea, bigint, bigint, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_crypto_stream_xchacha20_xor_ic_by_id$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "decrypted_columns",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.decrypted_columns(relid oid)\n RETURNS text\n LANGUAGE plpgsql\n SET search_path TO ''\nAS $function$\nDECLARE\n  m RECORD;\n  expression TEXT;\n  comma TEXT;\n  padding text = '        ';\nBEGIN\n  expression := E'\\n';\n  comma := padding;\n  FOR m IN SELECT * FROM pgsodium.mask_columns where attrelid = relid LOOP\n    expression := expression || comma;\n    IF m.key_id IS NULL AND m.key_id_column IS NULL THEN\n      expression := expression || padding || quote_ident(m.attname);\n    ELSE\n      expression := expression || padding || quote_ident(m.attname) || E',\\n';\n      IF m.format_type = 'text' THEN\n          expression := expression || format(\n            $f$\n            CASE WHEN %s IS NULL THEN NULL ELSE\n                CASE WHEN %s IS NULL THEN NULL ELSE pg_catalog.convert_from(\n                  pgsodium.crypto_aead_det_decrypt(\n                    pg_catalog.decode(%s, 'base64'),\n                    pg_catalog.convert_to((%s)::text, 'utf8'),\n                    %s::uuid,\n                    %s\n                  ),\n                    'utf8') END\n                END AS %s$f$,\n                quote_ident(m.attname),\n                coalesce(quote_ident(m.key_id_column), quote_literal(m.key_id)),\n                quote_ident(m.attname),\n                coalesce(pgsodium.quote_assoc(m.associated_columns), quote_literal('')),\n                coalesce(quote_ident(m.key_id_column), quote_literal(m.key_id)),\n                coalesce(quote_ident(m.nonce_column), 'NULL'),\n                quote_ident('decrypted_' || m.attname)\n          );\n      ELSIF m.format_type = 'bytea' THEN\n          expression := expression || format(\n            $f$\n            CASE WHEN %s IS NULL THEN NULL ELSE\n                CASE WHEN %s IS NULL THEN NULL ELSE pgsodium.crypto_aead_det_decrypt(\n                    %s::bytea,\n                    pg_catalog.convert_to((%s)::text, 'utf8'),\n                    %s::uuid,\n                    %s\n                  ) END\n                END AS %s$f$,\n                quote_ident(m.attname),\n                coalesce(quote_ident(m.key_id_column), quote_literal(m.key_id)),\n                quote_ident(m.attname),\n                coalesce(pgsodium.quote_assoc(m.associated_columns), quote_literal('')),\n                coalesce(quote_ident(m.key_id_column), quote_literal(m.key_id)),\n                coalesce(quote_ident(m.nonce_column), 'NULL'),\n                'decrypted_' || quote_ident(m.attname)\n          );\n      END IF;\n    END IF;\n    comma := E',       \\n';\n  END LOOP;\n  RETURN expression;\nEND\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "derive_key",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.derive_key(key_id bigint, key_len integer DEFAULT 32, context bytea DEFAULT '\\x7067736f6469756d'::bytea)\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_derive$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "disable_security_label_trigger",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.disable_security_label_trigger()\n RETURNS void\n LANGUAGE sql\n SECURITY DEFINER\n SET search_path TO ''\nAS $function$\n    ALTER EVENT TRIGGER pgsodium_trg_mask_update DISABLE;\n  $function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "enable_security_label_trigger",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.enable_security_label_trigger()\n RETURNS void\n LANGUAGE sql\n SECURITY DEFINER\n SET search_path TO ''\nAS $function$\n    ALTER EVENT TRIGGER pgsodium_trg_mask_update ENABLE;\n  $function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "encrypted_column",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.encrypted_column(relid oid, m record)\n RETURNS text\n LANGUAGE plpgsql\n SET search_path TO ''\nAS $function$\nDECLARE\n    expression TEXT;\n    comma TEXT;\nBEGIN\n  expression := '';\n  comma := E'        ';\n  expression := expression || comma;\n  IF m.format_type = 'text' THEN\n\t  expression := expression || format(\n\t\t$f$%s = CASE WHEN %s IS NULL THEN NULL ELSE\n\t\t\tCASE WHEN %s IS NULL THEN NULL ELSE pg_catalog.encode(\n\t\t\t  pgsodium.crypto_aead_det_encrypt(\n\t\t\t\tpg_catalog.convert_to(%s, 'utf8'),\n\t\t\t\tpg_catalog.convert_to((%s)::text, 'utf8'),\n\t\t\t\t%s::uuid,\n\t\t\t\t%s\n\t\t\t  ),\n\t\t\t\t'base64') END END$f$,\n\t\t\t'new.' || quote_ident(m.attname),\n\t\t\t'new.' || quote_ident(m.attname),\n\t\t\tCOALESCE('new.' || quote_ident(m.key_id_column), quote_literal(m.key_id)),\n\t\t\t'new.' || quote_ident(m.attname),\n\t\t\tCOALESCE(pgsodium.quote_assoc(m.associated_columns, true), quote_literal('')),\n\t\t\tCOALESCE('new.' || quote_ident(m.key_id_column), quote_literal(m.key_id)),\n\t\t\tCOALESCE('new.' || quote_ident(m.nonce_column), 'NULL')\n\t  );\n  ELSIF m.format_type = 'bytea' THEN\n\t  expression := expression || format(\n\t\t$f$%s = CASE WHEN %s IS NULL THEN NULL ELSE\n\t\t\tCASE WHEN %s IS NULL THEN NULL ELSE\n\t\t\t\t\tpgsodium.crypto_aead_det_encrypt(%s::bytea, pg_catalog.convert_to((%s)::text, 'utf8'),\n\t\t\t%s::uuid,\n\t\t\t%s\n\t\t  ) END END$f$,\n\t\t\t'new.' || quote_ident(m.attname),\n\t\t\t'new.' || quote_ident(m.attname),\n\t\t\tCOALESCE('new.' || quote_ident(m.key_id_column), quote_literal(m.key_id)),\n\t\t\t'new.' || quote_ident(m.attname),\n\t\t\tCOALESCE(pgsodium.quote_assoc(m.associated_columns, true), quote_literal('')),\n\t\t\tCOALESCE('new.' || quote_ident(m.key_id_column), quote_literal(m.key_id)),\n\t\t\tCOALESCE('new.' || quote_ident(m.nonce_column), 'NULL')\n\t  );\n  END IF;\n  comma := E';\\n        ';\n  RETURN expression;\nEND\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "encrypted_columns",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.encrypted_columns(relid oid)\n RETURNS text\n LANGUAGE plpgsql\n SET search_path TO ''\nAS $function$\nDECLARE\n    m RECORD;\n    expression TEXT;\n    comma TEXT;\nBEGIN\n  expression := '';\n  comma := E'        ';\n  FOR m IN SELECT * FROM pgsodium.mask_columns where attrelid = relid LOOP\n    IF m.key_id IS NULL AND m.key_id_column is NULL THEN\n      CONTINUE;\n    ELSE\n      expression := expression || comma;\n      IF m.format_type = 'text' THEN\n          expression := expression || format(\n            $f$%s = CASE WHEN %s IS NULL THEN NULL ELSE\n                CASE WHEN %s IS NULL THEN NULL ELSE pg_catalog.encode(\n                  pgsodium.crypto_aead_det_encrypt(\n                    pg_catalog.convert_to(%s, 'utf8'),\n                    pg_catalog.convert_to((%s)::text, 'utf8'),\n                    %s::uuid,\n                    %s\n                  ),\n                    'base64') END END$f$,\n                'new.' || quote_ident(m.attname),\n                'new.' || quote_ident(m.attname),\n                COALESCE('new.' || quote_ident(m.key_id_column), quote_literal(m.key_id)),\n                'new.' || quote_ident(m.attname),\n                COALESCE(pgsodium.quote_assoc(m.associated_columns, true), quote_literal('')),\n                COALESCE('new.' || quote_ident(m.key_id_column), quote_literal(m.key_id)),\n                COALESCE('new.' || quote_ident(m.nonce_column), 'NULL')\n          );\n      ELSIF m.format_type = 'bytea' THEN\n          expression := expression || format(\n            $f$%s = CASE WHEN %s IS NULL THEN NULL ELSE\n                CASE WHEN %s IS NULL THEN NULL ELSE\n                        pgsodium.crypto_aead_det_encrypt(%s::bytea, pg_catalog.convert_to((%s)::text, 'utf8'),\n                %s::uuid,\n                %s\n              ) END END$f$,\n                'new.' || quote_ident(m.attname),\n                'new.' || quote_ident(m.attname),\n                COALESCE('new.' || quote_ident(m.key_id_column), quote_literal(m.key_id)),\n                'new.' || quote_ident(m.attname),\n                COALESCE(pgsodium.quote_assoc(m.associated_columns, true), quote_literal('')),\n                COALESCE('new.' || quote_ident(m.key_id_column), quote_literal(m.key_id)),\n                COALESCE('new.' || quote_ident(m.nonce_column), 'NULL')\n          );\n      END IF;\n    END IF;\n    comma := E';\\n        ';\n  END LOOP;\n  RETURN expression;\nEND\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "get_key_by_id",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.get_key_by_id(uuid)\n RETURNS pgsodium.valid_key\n LANGUAGE sql\n SECURITY DEFINER\n SET search_path TO ''\nAS $function$\n    SELECT * from pgsodium.valid_key WHERE id = $1;\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "get_key_by_name",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.get_key_by_name(text)\n RETURNS pgsodium.valid_key\n LANGUAGE sql\n SECURITY DEFINER\n SET search_path TO ''\nAS $function$\n    SELECT * from pgsodium.valid_key WHERE name = $1;\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "get_named_keys",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.get_named_keys(filter text DEFAULT '%'::text)\n RETURNS SETOF pgsodium.valid_key\n LANGUAGE sql\n SECURITY DEFINER\n SET search_path TO ''\nAS $function$\n    SELECT * from pgsodium.valid_key vk WHERE vk.name ILIKE filter;\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "has_mask",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.has_mask(role regrole, source_name text)\n RETURNS boolean\n LANGUAGE sql\nAS $function$\n  SELECT EXISTS(\n    SELECT 1\n      FROM pg_shseclabel\n     WHERE  objoid = role\n       AND provider = 'pgsodium'\n       AND label ilike 'ACCESS%' || source_name || '%')\n  $function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "key_encrypt_secret_raw_key",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.key_encrypt_secret_raw_key()\n RETURNS trigger\n LANGUAGE plpgsql\nAS $function$\n\t\tBEGIN\n\t\t        new.raw_key = CASE WHEN new.raw_key IS NULL THEN NULL ELSE\n\t\t\tCASE WHEN new.parent_key IS NULL THEN NULL ELSE\n\t\t\t\t\tpgsodium.crypto_aead_det_encrypt(new.raw_key::bytea, pg_catalog.convert_to((new.id::text || new.associated_data::text)::text, 'utf8'),\n\t\t\tnew.parent_key::uuid,\n\t\t\tnew.raw_key_nonce\n\t\t  ) END END;\n\t\tRETURN new;\n\t\tEND;\n\t\t$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "mask_columns",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.mask_columns(source_relid oid)\n RETURNS TABLE(attname name, key_id text, key_id_column text, associated_column text, nonce_column text, format_type text)\n LANGUAGE sql\nAS $function$\n  SELECT\n  a.attname,\n  m.key_id,\n  m.key_id_column,\n  m.associated_column,\n  m.nonce_column,\n  m.format_type\n  FROM pg_attribute a\n  LEFT JOIN  pgsodium.masking_rule m\n  ON m.attrelid = a.attrelid\n  AND m.attname = a.attname\n  WHERE  a.attrelid = source_relid\n  AND    a.attnum > 0 -- exclude ctid, cmin, cmax\n  AND    NOT a.attisdropped\n  ORDER BY a.attnum;\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "mask_role",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.mask_role(masked_role regrole, source_name text, view_name text)\n RETURNS void\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO 'pg_catalog'\nAS $function$\nBEGIN\n  EXECUTE format(\n    'GRANT SELECT ON pgsodium.key TO %s',\n    masked_role);\n\n  EXECUTE format(\n    'GRANT pgsodium_keyiduser, pgsodium_keyholder TO %s',\n    masked_role);\n\n  EXECUTE format(\n    'GRANT ALL ON %s TO %s',\n    view_name,\n    masked_role);\n  RETURN;\nEND\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "pgsodium_derive",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.pgsodium_derive(key_id bigint, key_len integer DEFAULT 32, context bytea DEFAULT decode('pgsodium'::text, 'escape'::text))\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_derive$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "quote_assoc",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.quote_assoc(text, boolean DEFAULT false)\n RETURNS text\n LANGUAGE sql\nAS $function$\n    WITH a AS (SELECT array_agg(CASE WHEN $2 THEN\n                                    'new.' || quote_ident(trim(v))\n                                ELSE quote_ident(trim(v)) END) as r\n               FROM regexp_split_to_table($1, '\\s*,\\s*') as v)\n    SELECT array_to_string(a.r, '::text || ') || '::text' FROM a;\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "randombytes_buf",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.randombytes_buf(size integer)\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_randombytes_buf$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "randombytes_buf_deterministic",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.randombytes_buf_deterministic(size integer, seed bytea)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_randombytes_buf_deterministic$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "randombytes_new_seed",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.randombytes_new_seed()\n RETURNS bytea\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_randombytes_new_seed$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "randombytes_random",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.randombytes_random()\n RETURNS integer\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_randombytes_random$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "randombytes_uniform",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.randombytes_uniform(upper_bound integer)\n RETURNS integer\n LANGUAGE c\nAS '$libdir/pgsodium', $function$pgsodium_randombytes_uniform$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "sodium_base642bin",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.sodium_base642bin(base64 text)\n RETURNS bytea\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_sodium_base642bin$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "sodium_bin2base64",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.sodium_bin2base64(bin bytea)\n RETURNS text\n LANGUAGE c\n IMMUTABLE\nAS '$libdir/pgsodium', $function$pgsodium_sodium_bin2base64$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "trg_mask_update",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.trg_mask_update()\n RETURNS event_trigger\n LANGUAGE plpgsql\n SET search_path TO ''\nAS $function$\nDECLARE\n  r record;\nBEGIN\n  IF (SELECT bool_or(in_extension) FROM pg_event_trigger_ddl_commands()) THEN\n    RAISE NOTICE 'skipping pgsodium mask regeneration in extension';\n\tRETURN;\n  END IF;\n\n  FOR r IN\n    SELECT e.*\n    FROM pg_event_trigger_ddl_commands() e\n    WHERE EXISTS (\n      SELECT FROM pg_catalog.pg_class c\n      JOIN pg_catalog.pg_seclabel s ON s.classoid = c.tableoid\n                                   AND s.objoid = c.oid\n      WHERE c.tableoid = e.classid\n        AND e.objid = c.oid\n        AND s.provider = 'pgsodium'\n    )\n  LOOP\n    IF r.object_type in ('table', 'table column')\n    THEN\n      PERFORM pgsodium.update_mask(r.objid);\n    END IF;\n  END LOOP;\nEND\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "update_mask",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.update_mask(target oid, debug boolean DEFAULT false)\n RETURNS void\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nBEGIN\n  PERFORM pgsodium.disable_security_label_trigger();\n  PERFORM pgsodium.create_mask_view(objoid, objsubid, debug)\n    FROM pg_catalog.pg_seclabel sl\n    WHERE sl.objoid = target\n      AND sl.label ILIKE 'ENCRYPT%'\n      AND sl.provider = 'pgsodium';\n  PERFORM pgsodium.enable_security_label_trigger();\n  RETURN;\nEND\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "update_masks",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.update_masks(debug boolean DEFAULT false)\n RETURNS void\n LANGUAGE plpgsql\n SET search_path TO ''\nAS $function$\nBEGIN\n  PERFORM pgsodium.update_mask(objoid, debug)\n    FROM pg_catalog.pg_seclabel sl\n    JOIN pg_catalog.pg_class cl ON (cl.oid = sl.objoid)\n    WHERE label ilike 'ENCRYPT%'\n       AND cl.relowner = session_user::regrole::oid\n       AND provider = 'pgsodium'\n\t   AND objoid::regclass != 'pgsodium.key'::regclass\n\t;\n  RETURN;\nEND\n$function$\n"
  },
  {
    "schema_name": "pgsodium",
    "function_name": "version",
    "definition": "CREATE OR REPLACE FUNCTION pgsodium.version()\n RETURNS text\n LANGUAGE sql\nAS $function$ SELECT extversion FROM pg_extension WHERE extname = 'pgsodium' $function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "create_user_admin",
    "definition": "CREATE OR REPLACE FUNCTION public.create_user_admin(p_user_id uuid, p_email text, p_name text, p_role text, p_inmobiliaria_id uuid)\n RETURNS json\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO 'public'\nAS $function$\ndeclare\n  v_user json;\nbegin\n  -- Verificar parámetros requeridos\n  if p_user_id is null or p_email is null or p_name is null or p_role is null or p_inmobiliaria_id is null then\n    return json_build_object(\n      'success', false,\n      'message', 'Todos los campos son requeridos'\n    );\n  end if;\n\n  -- Verificar si el email ya existe\n  if exists (select 1 from public.users where email = p_email) then\n    return json_build_object(\n      'success', false,\n      'message', 'El correo electrónico ya está registrado'\n    );\n  end if;\n\n  -- Insertar el nuevo usuario\n  insert into public.users (\n    id,\n    email,\n    name,\n    role,\n    inmobiliaria_id\n  ) values (\n    p_user_id,\n    p_email,\n    p_name,\n    p_role,\n    p_inmobiliaria_id\n  )\n  returning json_build_object(\n    'id', id,\n    'email', email,\n    'name', name,\n    'role', role,\n    'inmobiliaria_id', inmobiliaria_id\n  ) into v_user;\n\n  return json_build_object(\n    'success', true,\n    'data', v_user\n  );\nexception\n  when unique_violation then\n    return json_build_object(\n      'success', false,\n      'message', 'Error de duplicación: ' || SQLERRM\n    );\n  when others then\n    return json_build_object(\n      'success', false,\n      'message', 'Error: ' || SQLERRM\n    );\nend;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "custom_access_token_hook",
    "definition": "CREATE OR REPLACE FUNCTION public.custom_access_token_hook(event jsonb)\n RETURNS jsonb\n LANGUAGE plpgsql\n SET search_path TO 'public'\nAS $function$\nDECLARE\n  claims jsonb;\nBEGIN\n  -- Extraer los claims actuales del evento\n  claims := event->'claims';\n\n  -- Añadir el claim 'role' desde raw_app_meta_data\n  IF (event->'user'->'raw_app_meta_data'->>'role') IS NOT NULL THEN\n    claims := jsonb_set(claims, '{role}', to_jsonb(event->'user'->'raw_app_meta_data'->>'role'));\n  END IF;\n\n  -- Añadir el claim 'inmobiliaria_id' desde raw_app_meta_data\n  IF (event->'user'->'raw_app_meta_data'->>'inmobiliaria_id') IS NOT NULL THEN\n    claims := jsonb_set(claims, '{inmobiliaria_id}', to_jsonb(event->'user'->'raw_app_meta_data'->>'inmobiliaria_id'));\n  END IF;\n\n  -- Actualizar los claims en el evento original\n  event := jsonb_set(event, '{claims}', claims);\n\n  -- Devolver el evento modificado\n  RETURN event;\nEND;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "delete_user_admin",
    "definition": "CREATE OR REPLACE FUNCTION public.delete_user_admin(p_user_id uuid)\n RETURNS json\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO 'public'\nAS $function$\nbegin\n  delete from public.users\n  where id = p_user_id;\n  \n  return json_build_object(\n    'success', true,\n    'message', 'Usuario eliminado correctamente'\n  );\nexception\n  when others then\n    return json_build_object(\n      'success', false,\n      'message', 'Error: ' || SQLERRM\n    );\nend;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "handle_new_user",
    "definition": "CREATE OR REPLACE FUNCTION public.handle_new_user()\n RETURNS trigger\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO 'public'\nAS $function$\nBEGIN\n  -- Configurar app_metadata\n  UPDATE auth.users\n  SET raw_app_metadata = jsonb_set(\n    COALESCE(raw_app_metadata, '{}'::jsonb),\n    '{role}',\n    '\"user\"'\n  )\n  WHERE id = NEW.id;\n  \n  RETURN NEW;\nEND;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "jwt_custom_claims",
    "definition": "CREATE OR REPLACE FUNCTION public.jwt_custom_claims(uid uuid)\n RETURNS jsonb\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO 'public', 'auth'\nAS $function$\nDECLARE\n    user_role TEXT;\nBEGIN\n    -- Obtener el rol del usuario desde public.users\n    SELECT role INTO user_role FROM public.users WHERE id = uid;\n\n    -- Si el usuario no existe, asignamos un rol por defecto\n    IF user_role IS NULL THEN\n        RETURN jsonb_build_object('role', 'anon'); -- En lugar de retornar '{}'\n    END IF;\n\n    -- Retornamos el JSON con el rol\n    RETURN jsonb_build_object('role', user_role);\nEND;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "set_default_role",
    "definition": "CREATE OR REPLACE FUNCTION public.set_default_role()\n RETURNS trigger\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO 'public'\nAS $function$\nBEGIN\n    -- Inicializar el campo raw_app_meta_data con el rol predeterminado\n    NEW.raw_app_meta_data = jsonb_set(\n        COALESCE(NEW.raw_app_meta_data, '{}'),\n        '{role}',\n        to_jsonb('user'::TEXT)  -- Rol predeterminado\n    );\n\n    RETURN NEW;\nEND;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "sync_inmobiliaria_to_auth_user",
    "definition": "CREATE OR REPLACE FUNCTION public.sync_inmobiliaria_to_auth_user()\n RETURNS trigger\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nDECLARE\n    current_metadata jsonb;\nBEGIN\n    -- Obtener los metadatos actuales del usuario en auth.users\n    SELECT COALESCE(raw_user_meta_data, '{}') INTO current_metadata\n    FROM auth.users\n    WHERE id = NEW.id;\n\n    -- Actualizar raw_user_meta_data en auth.users con role e inmobiliaria_id\n    UPDATE auth.users\n    SET raw_user_meta_data = jsonb_set(\n            jsonb_set(\n                current_metadata,\n                '{role}',\n                to_jsonb(NEW.role)\n            ),\n            '{inmobiliaria_id}',\n            to_jsonb(NEW.inmobiliaria_id)\n        )\n    WHERE id = NEW.id;\n\n    RETURN NEW;\nEND;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "sync_user_creation",
    "definition": "CREATE OR REPLACE FUNCTION public.sync_user_creation()\n RETURNS trigger\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO 'public'\nAS $function$BEGIN\n    -- Insertar usuario en public.users con el email desde auth.users\n    INSERT INTO public.users (id, email, role, inmobiliaria_id, name)\n    VALUES (\n        NEW.id, \n        NEW.email,  -- Se importa automáticamente de auth.users\n        'user',  -- Rol predeterminado\n        NULL,  -- inmobiliaria_id se asignará manualmente\n        NULL   -- name es opcional\n    )\n    ON CONFLICT (id) DO NOTHING;\n\n    RETURN NEW;\nEND;$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "sync_user_to_public_users",
    "definition": "CREATE OR REPLACE FUNCTION public.sync_user_to_public_users()\n RETURNS trigger\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO ''\nAS $function$\nBEGIN\n    -- Insertar usuario en public.users con los valores correctos desde auth.users\n    INSERT INTO public.users (id, email, role, inmobiliaria_id)\n    VALUES (\n        NEW.id,\n        NEW.email,\n        NEW.raw_app_meta_data->>'role',\n        NEW.raw_app_meta_data->>'inmobiliaria_id'\n    )\n    ON CONFLICT (id)\n    DO UPDATE SET\n        role = EXCLUDED.role,\n        inmobiliaria_id = EXCLUDED.inmobiliaria_id;\n\n    RETURN NEW;\nEND;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "update_user_admin",
    "definition": "CREATE OR REPLACE FUNCTION public.update_user_admin(p_user_id uuid, p_name text, p_role text, p_inmobiliaria_id uuid)\n RETURNS json\n LANGUAGE plpgsql\n SECURITY DEFINER\n SET search_path TO 'public'\nAS $function$\ndeclare\n  v_user json;\nbegin\n  update public.users\n  set \n    name = coalesce(p_name, name),\n    role = coalesce(p_role, role),\n    inmobiliaria_id = coalesce(p_inmobiliaria_id, inmobiliaria_id)\n  where id = p_user_id\n  returning json_build_object(\n    'id', id,\n    'email', email,\n    'name', name,\n    'role', role,\n    'inmobiliaria_id', inmobiliaria_id\n  ) into v_user;\n\n  return json_build_object(\n    'success', true,\n    'data', v_user\n  );\nexception\n  when others then\n    return json_build_object(\n      'success', false,\n      'message', 'Error: ' || SQLERRM\n    );\nend;\n$function$\n"
  },
  {
    "schema_name": "public",
    "function_name": "update_user_metadata",
    "definition": "CREATE OR REPLACE FUNCTION public.update_user_metadata()\n RETURNS trigger\n LANGUAGE plpgsql\n SET search_path TO 'public', 'pg_temp'\nAS $function$\nbegin\n  update auth.users\n  set raw_app_meta_data = jsonb_set(\n      jsonb_set(\n          coalesce(raw_app_meta_data, '{}'),\n          '{role}', to_jsonb(NEW.role)\n      ),\n      '{inmobiliaria_id}', to_jsonb(NEW.inmobiliaria_id)\n  )\n  where id = NEW.id;\n  return NEW;\nend;\n$function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "apply_rls",
    "definition": "CREATE OR REPLACE FUNCTION realtime.apply_rls(wal jsonb, max_record_bytes integer DEFAULT (1024 * 1024))\n RETURNS SETOF realtime.wal_rls\n LANGUAGE plpgsql\nAS $function$\ndeclare\n-- Regclass of the table e.g. public.notes\nentity_ regclass = (quote_ident(wal ->> 'schema') || '.' || quote_ident(wal ->> 'table'))::regclass;\n\n-- I, U, D, T: insert, update ...\naction realtime.action = (\n    case wal ->> 'action'\n        when 'I' then 'INSERT'\n        when 'U' then 'UPDATE'\n        when 'D' then 'DELETE'\n        else 'ERROR'\n    end\n);\n\n-- Is row level security enabled for the table\nis_rls_enabled bool = relrowsecurity from pg_class where oid = entity_;\n\nsubscriptions realtime.subscription[] = array_agg(subs)\n    from\n        realtime.subscription subs\n    where\n        subs.entity = entity_;\n\n-- Subscription vars\nroles regrole[] = array_agg(distinct us.claims_role::text)\n    from\n        unnest(subscriptions) us;\n\nworking_role regrole;\nclaimed_role regrole;\nclaims jsonb;\n\nsubscription_id uuid;\nsubscription_has_access bool;\nvisible_to_subscription_ids uuid[] = '{}';\n\n-- structured info for wal's columns\ncolumns realtime.wal_column[];\n-- previous identity values for update/delete\nold_columns realtime.wal_column[];\n\nerror_record_exceeds_max_size boolean = octet_length(wal::text) > max_record_bytes;\n\n-- Primary jsonb output for record\noutput jsonb;\n\nbegin\nperform set_config('role', null, true);\n\ncolumns =\n    array_agg(\n        (\n            x->>'name',\n            x->>'type',\n            x->>'typeoid',\n            realtime.cast(\n                (x->'value') #>> '{}',\n                coalesce(\n                    (x->>'typeoid')::regtype, -- null when wal2json version <= 2.4\n                    (x->>'type')::regtype\n                )\n            ),\n            (pks ->> 'name') is not null,\n            true\n        )::realtime.wal_column\n    )\n    from\n        jsonb_array_elements(wal -> 'columns') x\n        left join jsonb_array_elements(wal -> 'pk') pks\n            on (x ->> 'name') = (pks ->> 'name');\n\nold_columns =\n    array_agg(\n        (\n            x->>'name',\n            x->>'type',\n            x->>'typeoid',\n            realtime.cast(\n                (x->'value') #>> '{}',\n                coalesce(\n                    (x->>'typeoid')::regtype, -- null when wal2json version <= 2.4\n                    (x->>'type')::regtype\n                )\n            ),\n            (pks ->> 'name') is not null,\n            true\n        )::realtime.wal_column\n    )\n    from\n        jsonb_array_elements(wal -> 'identity') x\n        left join jsonb_array_elements(wal -> 'pk') pks\n            on (x ->> 'name') = (pks ->> 'name');\n\nfor working_role in select * from unnest(roles) loop\n\n    -- Update `is_selectable` for columns and old_columns\n    columns =\n        array_agg(\n            (\n                c.name,\n                c.type_name,\n                c.type_oid,\n                c.value,\n                c.is_pkey,\n                pg_catalog.has_column_privilege(working_role, entity_, c.name, 'SELECT')\n            )::realtime.wal_column\n        )\n        from\n            unnest(columns) c;\n\n    old_columns =\n            array_agg(\n                (\n                    c.name,\n                    c.type_name,\n                    c.type_oid,\n                    c.value,\n                    c.is_pkey,\n                    pg_catalog.has_column_privilege(working_role, entity_, c.name, 'SELECT')\n                )::realtime.wal_column\n            )\n            from\n                unnest(old_columns) c;\n\n    if action <> 'DELETE' and count(1) = 0 from unnest(columns) c where c.is_pkey then\n        return next (\n            jsonb_build_object(\n                'schema', wal ->> 'schema',\n                'table', wal ->> 'table',\n                'type', action\n            ),\n            is_rls_enabled,\n            -- subscriptions is already filtered by entity\n            (select array_agg(s.subscription_id) from unnest(subscriptions) as s where claims_role = working_role),\n            array['Error 400: Bad Request, no primary key']\n        )::realtime.wal_rls;\n\n    -- The claims role does not have SELECT permission to the primary key of entity\n    elsif action <> 'DELETE' and sum(c.is_selectable::int) <> count(1) from unnest(columns) c where c.is_pkey then\n        return next (\n            jsonb_build_object(\n                'schema', wal ->> 'schema',\n                'table', wal ->> 'table',\n                'type', action\n            ),\n            is_rls_enabled,\n            (select array_agg(s.subscription_id) from unnest(subscriptions) as s where claims_role = working_role),\n            array['Error 401: Unauthorized']\n        )::realtime.wal_rls;\n\n    else\n        output = jsonb_build_object(\n            'schema', wal ->> 'schema',\n            'table', wal ->> 'table',\n            'type', action,\n            'commit_timestamp', to_char(\n                ((wal ->> 'timestamp')::timestamptz at time zone 'utc'),\n                'YYYY-MM-DD\"T\"HH24:MI:SS.MS\"Z\"'\n            ),\n            'columns', (\n                select\n                    jsonb_agg(\n                        jsonb_build_object(\n                            'name', pa.attname,\n                            'type', pt.typname\n                        )\n                        order by pa.attnum asc\n                    )\n                from\n                    pg_attribute pa\n                    join pg_type pt\n                        on pa.atttypid = pt.oid\n                where\n                    attrelid = entity_\n                    and attnum > 0\n                    and pg_catalog.has_column_privilege(working_role, entity_, pa.attname, 'SELECT')\n            )\n        )\n        -- Add \"record\" key for insert and update\n        || case\n            when action in ('INSERT', 'UPDATE') then\n                jsonb_build_object(\n                    'record',\n                    (\n                        select\n                            jsonb_object_agg(\n                                -- if unchanged toast, get column name and value from old record\n                                coalesce((c).name, (oc).name),\n                                case\n                                    when (c).name is null then (oc).value\n                                    else (c).value\n                                end\n                            )\n                        from\n                            unnest(columns) c\n                            full outer join unnest(old_columns) oc\n                                on (c).name = (oc).name\n                        where\n                            coalesce((c).is_selectable, (oc).is_selectable)\n                            and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))\n                    )\n                )\n            else '{}'::jsonb\n        end\n        -- Add \"old_record\" key for update and delete\n        || case\n            when action = 'UPDATE' then\n                jsonb_build_object(\n                        'old_record',\n                        (\n                            select jsonb_object_agg((c).name, (c).value)\n                            from unnest(old_columns) c\n                            where\n                                (c).is_selectable\n                                and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))\n                        )\n                    )\n            when action = 'DELETE' then\n                jsonb_build_object(\n                    'old_record',\n                    (\n                        select jsonb_object_agg((c).name, (c).value)\n                        from unnest(old_columns) c\n                        where\n                            (c).is_selectable\n                            and ( not error_record_exceeds_max_size or (octet_length((c).value::text) <= 64))\n                            and ( not is_rls_enabled or (c).is_pkey ) -- if RLS enabled, we can't secure deletes so filter to pkey\n                    )\n                )\n            else '{}'::jsonb\n        end;\n\n        -- Create the prepared statement\n        if is_rls_enabled and action <> 'DELETE' then\n            if (select 1 from pg_prepared_statements where name = 'walrus_rls_stmt' limit 1) > 0 then\n                deallocate walrus_rls_stmt;\n            end if;\n            execute realtime.build_prepared_statement_sql('walrus_rls_stmt', entity_, columns);\n        end if;\n\n        visible_to_subscription_ids = '{}';\n\n        for subscription_id, claims in (\n                select\n                    subs.subscription_id,\n                    subs.claims\n                from\n                    unnest(subscriptions) subs\n                where\n                    subs.entity = entity_\n                    and subs.claims_role = working_role\n                    and (\n                        realtime.is_visible_through_filters(columns, subs.filters)\n                        or (\n                          action = 'DELETE'\n                          and realtime.is_visible_through_filters(old_columns, subs.filters)\n                        )\n                    )\n        ) loop\n\n            if not is_rls_enabled or action = 'DELETE' then\n                visible_to_subscription_ids = visible_to_subscription_ids || subscription_id;\n            else\n                -- Check if RLS allows the role to see the record\n                perform\n                    -- Trim leading and trailing quotes from working_role because set_config\n                    -- doesn't recognize the role as valid if they are included\n                    set_config('role', trim(both '\"' from working_role::text), true),\n                    set_config('request.jwt.claims', claims::text, true);\n\n                execute 'execute walrus_rls_stmt' into subscription_has_access;\n\n                if subscription_has_access then\n                    visible_to_subscription_ids = visible_to_subscription_ids || subscription_id;\n                end if;\n            end if;\n        end loop;\n\n        perform set_config('role', null, true);\n\n        return next (\n            output,\n            is_rls_enabled,\n            visible_to_subscription_ids,\n            case\n                when error_record_exceeds_max_size then array['Error 413: Payload Too Large']\n                else '{}'\n            end\n        )::realtime.wal_rls;\n\n    end if;\nend loop;\n\nperform set_config('role', null, true);\nend;\n$function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "broadcast_changes",
    "definition": "CREATE OR REPLACE FUNCTION realtime.broadcast_changes(topic_name text, event_name text, operation text, table_name text, table_schema text, new record, old record, level text DEFAULT 'ROW'::text)\n RETURNS void\n LANGUAGE plpgsql\nAS $function$\nDECLARE\n    -- Declare a variable to hold the JSONB representation of the row\n    row_data jsonb := '{}'::jsonb;\nBEGIN\n    IF level = 'STATEMENT' THEN\n        RAISE EXCEPTION 'function can only be triggered for each row, not for each statement';\n    END IF;\n    -- Check the operation type and handle accordingly\n    IF operation = 'INSERT' OR operation = 'UPDATE' OR operation = 'DELETE' THEN\n        row_data := jsonb_build_object('old_record', OLD, 'record', NEW, 'operation', operation, 'table', table_name, 'schema', table_schema);\n        PERFORM realtime.send (row_data, event_name, topic_name);\n    ELSE\n        RAISE EXCEPTION 'Unexpected operation type: %', operation;\n    END IF;\nEXCEPTION\n    WHEN OTHERS THEN\n        RAISE EXCEPTION 'Failed to process the row: %', SQLERRM;\nEND;\n\n$function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "build_prepared_statement_sql",
    "definition": "CREATE OR REPLACE FUNCTION realtime.build_prepared_statement_sql(prepared_statement_name text, entity regclass, columns realtime.wal_column[])\n RETURNS text\n LANGUAGE sql\nAS $function$\n      /*\n      Builds a sql string that, if executed, creates a prepared statement to\n      tests retrive a row from *entity* by its primary key columns.\n      Example\n          select realtime.build_prepared_statement_sql('public.notes', '{\"id\"}'::text[], '{\"bigint\"}'::text[])\n      */\n          select\n      'prepare ' || prepared_statement_name || ' as\n          select\n              exists(\n                  select\n                      1\n                  from\n                      ' || entity || '\n                  where\n                      ' || string_agg(quote_ident(pkc.name) || '=' || quote_nullable(pkc.value #>> '{}') , ' and ') || '\n              )'\n          from\n              unnest(columns) pkc\n          where\n              pkc.is_pkey\n          group by\n              entity\n      $function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "cast",
    "definition": "CREATE OR REPLACE FUNCTION realtime.\"cast\"(val text, type_ regtype)\n RETURNS jsonb\n LANGUAGE plpgsql\n IMMUTABLE\nAS $function$\n    declare\n      res jsonb;\n    begin\n      execute format('select to_jsonb(%L::'|| type_::text || ')', val)  into res;\n      return res;\n    end\n    $function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "check_equality_op",
    "definition": "CREATE OR REPLACE FUNCTION realtime.check_equality_op(op realtime.equality_op, type_ regtype, val_1 text, val_2 text)\n RETURNS boolean\n LANGUAGE plpgsql\n IMMUTABLE\nAS $function$\n      /*\n      Casts *val_1* and *val_2* as type *type_* and check the *op* condition for truthiness\n      */\n      declare\n          op_symbol text = (\n              case\n                  when op = 'eq' then '='\n                  when op = 'neq' then '!='\n                  when op = 'lt' then '<'\n                  when op = 'lte' then '<='\n                  when op = 'gt' then '>'\n                  when op = 'gte' then '>='\n                  when op = 'in' then '= any'\n                  else 'UNKNOWN OP'\n              end\n          );\n          res boolean;\n      begin\n          execute format(\n              'select %L::'|| type_::text || ' ' || op_symbol\n              || ' ( %L::'\n              || (\n                  case\n                      when op = 'in' then type_::text || '[]'\n                      else type_::text end\n              )\n              || ')', val_1, val_2) into res;\n          return res;\n      end;\n      $function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "is_visible_through_filters",
    "definition": "CREATE OR REPLACE FUNCTION realtime.is_visible_through_filters(columns realtime.wal_column[], filters realtime.user_defined_filter[])\n RETURNS boolean\n LANGUAGE sql\n IMMUTABLE\nAS $function$\n    /*\n    Should the record be visible (true) or filtered out (false) after *filters* are applied\n    */\n        select\n            -- Default to allowed when no filters present\n            $2 is null -- no filters. this should not happen because subscriptions has a default\n            or array_length($2, 1) is null -- array length of an empty array is null\n            or bool_and(\n                coalesce(\n                    realtime.check_equality_op(\n                        op:=f.op,\n                        type_:=coalesce(\n                            col.type_oid::regtype, -- null when wal2json version <= 2.4\n                            col.type_name::regtype\n                        ),\n                        -- cast jsonb to text\n                        val_1:=col.value #>> '{}',\n                        val_2:=f.value\n                    ),\n                    false -- if null, filter does not match\n                )\n            )\n        from\n            unnest(filters) f\n            join unnest(columns) col\n                on f.column_name = col.name;\n    $function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "list_changes",
    "definition": "CREATE OR REPLACE FUNCTION realtime.list_changes(publication name, slot_name name, max_changes integer, max_record_bytes integer)\n RETURNS SETOF realtime.wal_rls\n LANGUAGE sql\n SET log_min_messages TO 'fatal'\nAS $function$\n      with pub as (\n        select\n          concat_ws(\n            ',',\n            case when bool_or(pubinsert) then 'insert' else null end,\n            case when bool_or(pubupdate) then 'update' else null end,\n            case when bool_or(pubdelete) then 'delete' else null end\n          ) as w2j_actions,\n          coalesce(\n            string_agg(\n              realtime.quote_wal2json(format('%I.%I', schemaname, tablename)::regclass),\n              ','\n            ) filter (where ppt.tablename is not null and ppt.tablename not like '% %'),\n            ''\n          ) w2j_add_tables\n        from\n          pg_publication pp\n          left join pg_publication_tables ppt\n            on pp.pubname = ppt.pubname\n        where\n          pp.pubname = publication\n        group by\n          pp.pubname\n        limit 1\n      ),\n      w2j as (\n        select\n          x.*, pub.w2j_add_tables\n        from\n          pub,\n          pg_logical_slot_get_changes(\n            slot_name, null, max_changes,\n            'include-pk', 'true',\n            'include-transaction', 'false',\n            'include-timestamp', 'true',\n            'include-type-oids', 'true',\n            'format-version', '2',\n            'actions', pub.w2j_actions,\n            'add-tables', pub.w2j_add_tables\n          ) x\n      )\n      select\n        xyz.wal,\n        xyz.is_rls_enabled,\n        xyz.subscription_ids,\n        xyz.errors\n      from\n        w2j,\n        realtime.apply_rls(\n          wal := w2j.data::jsonb,\n          max_record_bytes := max_record_bytes\n        ) xyz(wal, is_rls_enabled, subscription_ids, errors)\n      where\n        w2j.w2j_add_tables <> ''\n        and xyz.subscription_ids[1] is not null\n    $function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "quote_wal2json",
    "definition": "CREATE OR REPLACE FUNCTION realtime.quote_wal2json(entity regclass)\n RETURNS text\n LANGUAGE sql\n IMMUTABLE STRICT\nAS $function$\n      select\n        (\n          select string_agg('' || ch,'')\n          from unnest(string_to_array(nsp.nspname::text, null)) with ordinality x(ch, idx)\n          where\n            not (x.idx = 1 and x.ch = '\"')\n            and not (\n              x.idx = array_length(string_to_array(nsp.nspname::text, null), 1)\n              and x.ch = '\"'\n            )\n        )\n        || '.'\n        || (\n          select string_agg('' || ch,'')\n          from unnest(string_to_array(pc.relname::text, null)) with ordinality x(ch, idx)\n          where\n            not (x.idx = 1 and x.ch = '\"')\n            and not (\n              x.idx = array_length(string_to_array(nsp.nspname::text, null), 1)\n              and x.ch = '\"'\n            )\n          )\n      from\n        pg_class pc\n        join pg_namespace nsp\n          on pc.relnamespace = nsp.oid\n      where\n        pc.oid = entity\n    $function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "send",
    "definition": "CREATE OR REPLACE FUNCTION realtime.send(payload jsonb, event text, topic text, private boolean DEFAULT true)\n RETURNS void\n LANGUAGE plpgsql\nAS $function$\nBEGIN\n  BEGIN\n    -- Set the topic configuration\n    EXECUTE format('SET LOCAL realtime.topic TO %L', topic);\n\n    -- Attempt to insert the message\n    INSERT INTO realtime.messages (payload, event, topic, private, extension)\n    VALUES (payload, event, topic, private, 'broadcast');\n  EXCEPTION\n    WHEN OTHERS THEN\n      -- Capture and notify the error\n      PERFORM pg_notify(\n          'realtime:system',\n          jsonb_build_object(\n              'error', SQLERRM,\n              'function', 'realtime.send',\n              'event', event,\n              'topic', topic,\n              'private', private\n          )::text\n      );\n  END;\nEND;\n$function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "subscription_check_filters",
    "definition": "CREATE OR REPLACE FUNCTION realtime.subscription_check_filters()\n RETURNS trigger\n LANGUAGE plpgsql\nAS $function$\n    /*\n    Validates that the user defined filters for a subscription:\n    - refer to valid columns that the claimed role may access\n    - values are coercable to the correct column type\n    */\n    declare\n        col_names text[] = coalesce(\n                array_agg(c.column_name order by c.ordinal_position),\n                '{}'::text[]\n            )\n            from\n                information_schema.columns c\n            where\n                format('%I.%I', c.table_schema, c.table_name)::regclass = new.entity\n                and pg_catalog.has_column_privilege(\n                    (new.claims ->> 'role'),\n                    format('%I.%I', c.table_schema, c.table_name)::regclass,\n                    c.column_name,\n                    'SELECT'\n                );\n        filter realtime.user_defined_filter;\n        col_type regtype;\n\n        in_val jsonb;\n    begin\n        for filter in select * from unnest(new.filters) loop\n            -- Filtered column is valid\n            if not filter.column_name = any(col_names) then\n                raise exception 'invalid column for filter %', filter.column_name;\n            end if;\n\n            -- Type is sanitized and safe for string interpolation\n            col_type = (\n                select atttypid::regtype\n                from pg_catalog.pg_attribute\n                where attrelid = new.entity\n                      and attname = filter.column_name\n            );\n            if col_type is null then\n                raise exception 'failed to lookup type for column %', filter.column_name;\n            end if;\n\n            -- Set maximum number of entries for in filter\n            if filter.op = 'in'::realtime.equality_op then\n                in_val = realtime.cast(filter.value, (col_type::text || '[]')::regtype);\n                if coalesce(jsonb_array_length(in_val), 0) > 100 then\n                    raise exception 'too many values for `in` filter. Maximum 100';\n                end if;\n            else\n                -- raises an exception if value is not coercable to type\n                perform realtime.cast(filter.value, col_type);\n            end if;\n\n        end loop;\n\n        -- Apply consistent order to filters so the unique constraint on\n        -- (subscription_id, entity, filters) can't be tricked by a different filter order\n        new.filters = coalesce(\n            array_agg(f order by f.column_name, f.op, f.value),\n            '{}'\n        ) from unnest(new.filters) f;\n\n        return new;\n    end;\n    $function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "to_regrole",
    "definition": "CREATE OR REPLACE FUNCTION realtime.to_regrole(role_name text)\n RETURNS regrole\n LANGUAGE sql\n IMMUTABLE\nAS $function$ select role_name::regrole $function$\n"
  },
  {
    "schema_name": "realtime",
    "function_name": "topic",
    "definition": "CREATE OR REPLACE FUNCTION realtime.topic()\n RETURNS text\n LANGUAGE sql\n STABLE\nAS $function$\nselect nullif(current_setting('realtime.topic', true), '')::text;\n$function$\n"
  },
  {
    "schema_name": "storage",
    "function_name": "can_insert_object",
    "definition": "CREATE OR REPLACE FUNCTION storage.can_insert_object(bucketid text, name text, owner uuid, metadata jsonb)\n RETURNS void\n LANGUAGE plpgsql\nAS $function$\nBEGIN\n  INSERT INTO \"storage\".\"objects\" (\"bucket_id\", \"name\", \"owner\", \"metadata\") VALUES (bucketid, name, owner, metadata);\n  -- hack to rollback the successful insert\n  RAISE sqlstate 'PT200' using\n  message = 'ROLLBACK',\n  detail = 'rollback successful insert';\nEND\n$function$\n"
  },
  {
    "schema_name": "storage",
    "function_name": "extension",
    "definition": "CREATE OR REPLACE FUNCTION storage.extension(name text)\n RETURNS text\n LANGUAGE plpgsql\nAS $function$\nDECLARE\n_parts text[];\n_filename text;\nBEGIN\n\tselect string_to_array(name, '/') into _parts;\n\tselect _parts[array_length(_parts,1)] into _filename;\n\t-- @todo return the last part instead of 2\n\treturn reverse(split_part(reverse(_filename), '.', 1));\nEND\n$function$\n"
  },
  {
    "schema_name": "storage",
    "function_name": "filename",
    "definition": "CREATE OR REPLACE FUNCTION storage.filename(name text)\n RETURNS text\n LANGUAGE plpgsql\nAS $function$\nDECLARE\n_parts text[];\nBEGIN\n\tselect string_to_array(name, '/') into _parts;\n\treturn _parts[array_length(_parts,1)];\nEND\n$function$\n"
  },
  {
    "schema_name": "storage",
    "function_name": "foldername",
    "definition": "CREATE OR REPLACE FUNCTION storage.foldername(name text)\n RETURNS text[]\n LANGUAGE plpgsql\nAS $function$\nDECLARE\n_parts text[];\nBEGIN\n\tselect string_to_array(name, '/') into _parts;\n\treturn _parts[1:array_length(_parts,1)-1];\nEND\n$function$\n"
  },
  {
    "schema_name": "storage",
    "function_name": "get_size_by_bucket",
    "definition": "CREATE OR REPLACE FUNCTION storage.get_size_by_bucket()\n RETURNS TABLE(size bigint, bucket_id text)\n LANGUAGE plpgsql\nAS $function$\nBEGIN\n    return query\n        select sum((metadata->>'size')::int) as size, obj.bucket_id\n        from \"storage\".objects as obj\n        group by obj.bucket_id;\nEND\n$function$\n"
  },
  {
    "schema_name": "storage",
    "function_name": "list_multipart_uploads_with_delimiter",
    "definition": "CREATE OR REPLACE FUNCTION storage.list_multipart_uploads_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer DEFAULT 100, next_key_token text DEFAULT ''::text, next_upload_token text DEFAULT ''::text)\n RETURNS TABLE(key text, id text, created_at timestamp with time zone)\n LANGUAGE plpgsql\nAS $function$\nBEGIN\n    RETURN QUERY EXECUTE\n        'SELECT DISTINCT ON(key COLLATE \"C\") * from (\n            SELECT\n                CASE\n                    WHEN position($2 IN substring(key from length($1) + 1)) > 0 THEN\n                        substring(key from 1 for length($1) + position($2 IN substring(key from length($1) + 1)))\n                    ELSE\n                        key\n                END AS key, id, created_at\n            FROM\n                storage.s3_multipart_uploads\n            WHERE\n                bucket_id = $5 AND\n                key ILIKE $1 || ''%'' AND\n                CASE\n                    WHEN $4 != '''' AND $6 = '''' THEN\n                        CASE\n                            WHEN position($2 IN substring(key from length($1) + 1)) > 0 THEN\n                                substring(key from 1 for length($1) + position($2 IN substring(key from length($1) + 1))) COLLATE \"C\" > $4\n                            ELSE\n                                key COLLATE \"C\" > $4\n                            END\n                    ELSE\n                        true\n                END AND\n                CASE\n                    WHEN $6 != '''' THEN\n                        id COLLATE \"C\" > $6\n                    ELSE\n                        true\n                    END\n            ORDER BY\n                key COLLATE \"C\" ASC, created_at ASC) as e order by key COLLATE \"C\" LIMIT $3'\n        USING prefix_param, delimiter_param, max_keys, next_key_token, bucket_id, next_upload_token;\nEND;\n$function$\n"
  },
  {
    "schema_name": "storage",
    "function_name": "list_objects_with_delimiter",
    "definition": "CREATE OR REPLACE FUNCTION storage.list_objects_with_delimiter(bucket_id text, prefix_param text, delimiter_param text, max_keys integer DEFAULT 100, start_after text DEFAULT ''::text, next_token text DEFAULT ''::text)\n RETURNS TABLE(name text, id uuid, metadata jsonb, updated_at timestamp with time zone)\n LANGUAGE plpgsql\nAS $function$\nBEGIN\n    RETURN QUERY EXECUTE\n        'SELECT DISTINCT ON(name COLLATE \"C\") * from (\n            SELECT\n                CASE\n                    WHEN position($2 IN substring(name from length($1) + 1)) > 0 THEN\n                        substring(name from 1 for length($1) + position($2 IN substring(name from length($1) + 1)))\n                    ELSE\n                        name\n                END AS name, id, metadata, updated_at\n            FROM\n                storage.objects\n            WHERE\n                bucket_id = $5 AND\n                name ILIKE $1 || ''%'' AND\n                CASE\n                    WHEN $6 != '''' THEN\n                    name COLLATE \"C\" > $6\n                ELSE true END\n                AND CASE\n                    WHEN $4 != '''' THEN\n                        CASE\n                            WHEN position($2 IN substring(name from length($1) + 1)) > 0 THEN\n                                substring(name from 1 for length($1) + position($2 IN substring(name from length($1) + 1))) COLLATE \"C\" > $4\n                            ELSE\n                                name COLLATE \"C\" > $4\n                            END\n                    ELSE\n                        true\n                END\n            ORDER BY\n                name COLLATE \"C\" ASC) as e order by name COLLATE \"C\" LIMIT $3'\n        USING prefix_param, delimiter_param, max_keys, next_token, bucket_id, start_after;\nEND;\n$function$\n"
  },
  {
    "schema_name": "storage",
    "function_name": "operation",
    "definition": "CREATE OR REPLACE FUNCTION storage.operation()\n RETURNS text\n LANGUAGE plpgsql\n STABLE\nAS $function$\nBEGIN\n    RETURN current_setting('storage.operation', true);\nEND;\n$function$\n"
  },
  {
    "schema_name": "storage",
    "function_name": "search",
    "definition": "CREATE OR REPLACE FUNCTION storage.search(prefix text, bucketname text, limits integer DEFAULT 100, levels integer DEFAULT 1, offsets integer DEFAULT 0, search text DEFAULT ''::text, sortcolumn text DEFAULT 'name'::text, sortorder text DEFAULT 'asc'::text)\n RETURNS TABLE(name text, id uuid, updated_at timestamp with time zone, created_at timestamp with time zone, last_accessed_at timestamp with time zone, metadata jsonb)\n LANGUAGE plpgsql\n STABLE\nAS $function$\ndeclare\n  v_order_by text;\n  v_sort_order text;\nbegin\n  case\n    when sortcolumn = 'name' then\n      v_order_by = 'name';\n    when sortcolumn = 'updated_at' then\n      v_order_by = 'updated_at';\n    when sortcolumn = 'created_at' then\n      v_order_by = 'created_at';\n    when sortcolumn = 'last_accessed_at' then\n      v_order_by = 'last_accessed_at';\n    else\n      v_order_by = 'name';\n  end case;\n\n  case\n    when sortorder = 'asc' then\n      v_sort_order = 'asc';\n    when sortorder = 'desc' then\n      v_sort_order = 'desc';\n    else\n      v_sort_order = 'asc';\n  end case;\n\n  v_order_by = v_order_by || ' ' || v_sort_order;\n\n  return query execute\n    'with folders as (\n       select path_tokens[$1] as folder\n       from storage.objects\n         where objects.name ilike $2 || $3 || ''%''\n           and bucket_id = $4\n           and array_length(objects.path_tokens, 1) <> $1\n       group by folder\n       order by folder ' || v_sort_order || '\n     )\n     (select folder as \"name\",\n            null as id,\n            null as updated_at,\n            null as created_at,\n            null as last_accessed_at,\n            null as metadata from folders)\n     union all\n     (select path_tokens[$1] as \"name\",\n            id,\n            updated_at,\n            created_at,\n            last_accessed_at,\n            metadata\n     from storage.objects\n     where objects.name ilike $2 || $3 || ''%''\n       and bucket_id = $4\n       and array_length(objects.path_tokens, 1) = $1\n     order by ' || v_order_by || ')\n     limit $5\n     offset $6' using levels, prefix, search, bucketname, limits, offsets;\nend;\n$function$\n"
  },
  {
    "schema_name": "storage",
    "function_name": "update_updated_at_column",
    "definition": "CREATE OR REPLACE FUNCTION storage.update_updated_at_column()\n RETURNS trigger\n LANGUAGE plpgsql\nAS $function$\nBEGIN\n    NEW.updated_at = now();\n    RETURN NEW; \nEND;\n$function$\n"
  },
  {
    "schema_name": "vault",
    "function_name": "create_secret",
    "definition": "CREATE OR REPLACE FUNCTION vault.create_secret(new_secret text, new_name text DEFAULT NULL::text, new_description text DEFAULT ''::text, new_key_id uuid DEFAULT NULL::uuid)\n RETURNS uuid\n LANGUAGE sql\nAS $function$\n    INSERT INTO vault.secrets (secret, name, description, key_id)\n    VALUES (\n        new_secret,\n        new_name,\n        new_description,\n        CASE WHEN new_key_id IS NULL THEN (pgsodium.create_key()).id ELSE new_key_id END)\n    RETURNING id;\n    $function$\n"
  },
  {
    "schema_name": "vault",
    "function_name": "secrets_encrypt_secret_secret",
    "definition": "CREATE OR REPLACE FUNCTION vault.secrets_encrypt_secret_secret()\n RETURNS trigger\n LANGUAGE plpgsql\nAS $function$\n\t\tBEGIN\n\t\t        new.secret = CASE WHEN new.secret IS NULL THEN NULL ELSE\n\t\t\tCASE WHEN new.key_id IS NULL THEN NULL ELSE pg_catalog.encode(\n\t\t\t  pgsodium.crypto_aead_det_encrypt(\n\t\t\t\tpg_catalog.convert_to(new.secret, 'utf8'),\n\t\t\t\tpg_catalog.convert_to((new.id::text || new.description::text || new.created_at::text || new.updated_at::text)::text, 'utf8'),\n\t\t\t\tnew.key_id::uuid,\n\t\t\t\tnew.nonce\n\t\t\t  ),\n\t\t\t\t'base64') END END;\n\t\tRETURN new;\n\t\tEND;\n\t\t$function$\n"
  },
  {
    "schema_name": "vault",
    "function_name": "update_secret",
    "definition": "CREATE OR REPLACE FUNCTION vault.update_secret(secret_id uuid, new_secret text DEFAULT NULL::text, new_name text DEFAULT NULL::text, new_description text DEFAULT NULL::text, new_key_id uuid DEFAULT NULL::uuid)\n RETURNS void\n LANGUAGE sql\nAS $function$\n\tUPDATE vault.decrypted_secrets s\n    SET\n        secret = CASE WHEN new_secret IS NULL THEN s.decrypted_secret ELSE new_secret END,\n        name = CASE WHEN new_name IS NULL THEN s.name ELSE new_name END,\n        description = CASE WHEN new_description IS NULL THEN s.description ELSE new_description END,\n        key_id = CASE WHEN new_key_id IS NULL THEN s.key_id ELSE new_key_id END,\n        updated_at = CURRENT_TIMESTAMP\n    WHERE s.id = secret_id\n    $function$\n"
  }
]

________

