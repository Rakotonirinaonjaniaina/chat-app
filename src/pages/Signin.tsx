import Head from 'next/head';

export default function Signin() {
    const handleSignIn = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Head>
                <title>Sign In</title>
                <meta name="description" content="Sign in to your account" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Sign In</h1>
                <form onSubmit={handleSignIn}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                    <br />
                    <button type="submit">Sign In</button>
                </form>
            </main>
        </>
    );
}
