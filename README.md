# honeybee

I'm playing around nextjs serverless deployment model, (it converts api functions to lambdas). Also trying to create responsive design with tailwindcss.

There was a time when I hated working on UI(main reason for this was CSS's imperative approach),
but tailwindcss with its declarative syntax really helped me to get started.

For oauth2, I started with next-auth, I had a history with this library, used it in the past, did two bug fixes on it and abandonet it for troubles caused. 
I encountered a bug while trying to get it working too this time, even though it seems easy to get started with next-auth, it's full of errors, it's undocumented
and it just does not get things right in terms of what should be done by user and what should be done by library.

I'm doing oauth2 with passport now (bridge between passport and serverless nextjs is next-connect library).

I have yet to decide how to store data, I want to be serverless so simply storing in any database won't do. Faunadb does seem decent alternative,
but I'm not sure about investing into close-sourced project which does not let me self-host and even though it support transactions and referential integrity,
it uses fql(fauna query language) and not sql.
