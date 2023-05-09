import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../src/styles/Signup.module.css';

interface User {
  name: string;
  email: string;
  bio?: string;
}

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState<User>({ name: '', email: '', bio: '' });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    localStorage.setItem('user', JSON.stringify(user));

    router.push('/chat');
  };

  return (
    <>
      <form className={styles.signupForm} onSubmit={handleSignup}>
        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Your name..." />
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Your email..." />
        <input type="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Your password..." />
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm your password..." />
        <input type="text" name="bio" value={user.bio} onChange={handleChange} placeholder="Your bio..." />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
