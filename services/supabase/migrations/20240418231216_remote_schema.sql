create table "public"."pre_sale" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "project_id" text,
    "account" text,
    "address" text,
    "signature" text
);


alter table "public"."pre_sale" enable row level security;

CREATE UNIQUE INDEX "pre-sale_pkey" ON public.pre_sale USING btree (id);

alter table "public"."pre_sale" add constraint "pre-sale_pkey" PRIMARY KEY using index "pre-sale_pkey";

grant delete on table "public"."pre_sale" to "anon";

grant insert on table "public"."pre_sale" to "anon";

grant references on table "public"."pre_sale" to "anon";

grant select on table "public"."pre_sale" to "anon";

grant trigger on table "public"."pre_sale" to "anon";

grant truncate on table "public"."pre_sale" to "anon";

grant update on table "public"."pre_sale" to "anon";

grant delete on table "public"."pre_sale" to "authenticated";

grant insert on table "public"."pre_sale" to "authenticated";

grant references on table "public"."pre_sale" to "authenticated";

grant select on table "public"."pre_sale" to "authenticated";

grant trigger on table "public"."pre_sale" to "authenticated";

grant truncate on table "public"."pre_sale" to "authenticated";

grant update on table "public"."pre_sale" to "authenticated";

grant delete on table "public"."pre_sale" to "service_role";

grant insert on table "public"."pre_sale" to "service_role";

grant references on table "public"."pre_sale" to "service_role";

grant select on table "public"."pre_sale" to "service_role";

grant trigger on table "public"."pre_sale" to "service_role";

grant truncate on table "public"."pre_sale" to "service_role";

grant update on table "public"."pre_sale" to "service_role";

