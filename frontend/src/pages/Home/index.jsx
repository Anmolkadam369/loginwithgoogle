import styles from './styles.module.css';

function Home(userDetails) {
    const user = userDetails.user;
    const logout =()=>{
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/logout`,"_self"
        );
    }

    return (
        <div className='{styles.container}'>
            <h1 className={styles.heading}>Home</h1>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img className={styles.img} src="./images/profile.jpg" alt="profile"/>
                </div>
                <div className={styles.right}>
                    <h2 className={styles.from_heading}>Profile</h2>
                    <img className={styles.profile_img} src={user.picture} alt="userprofileimage"/>
                    <input type='text' defaultValue={user.name} className={styles.input} placeholder='Username'/>
                    <input type='text' defaultValue={user.email} className={styles.input} placeholder='Email'/>
                    <button className={styles.btn} onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Home;