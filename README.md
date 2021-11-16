Get started with `yarn dev`

This is a test project... Your objective is to create:

1. A multistep form that submits and email and a password to retreive a token
   Test that it must pass:
2. User must enter a valid email before it continues to the make password page
3. Password must have one capital letter, one number, one special character (+!%&) and at least 8 characters long
4. User must select between a radio button with submission values of "client" or "therapist"
5. Must send data and display token on page

You will find the data for createUser mutation here: https://serotana-test-rb.onrender.com/graphiql
Post mutation to: https://serotana-test-rb.onrender.com/graphql

Tip: sent data must be shaped like this:
createUser({input: { email, password, accountType }})

Tip: accountType == "client" || "therapist"

You must use the following to complete this:

1. Zod for input validation
2. React hook form for forms
3. URQL for mutation sumission
4. Style basic form with the extra time you have

Everything you need is already installed

In your env set the following:
NEXT_PUBLIC_JWT_TOKEN_NAME='\_serotana'
NEXT_PUBLIC_JWT_REFRESH_TOKEN_NAME='\_serotana_r'
NEXT_PUBLIC_GRAPHQL_URL="https://serotana-test-rb.onrender.com/graphql"