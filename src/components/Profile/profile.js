import './profile.scss';








const Profile = () => {
    return (
        <>
        {/* Here we have the div tag for student's profile info */}
        <div className="content">

        <div className="profile">
        <p>Profile picture</p>
        <h5>Student's name</h5>
        <p>Email</p>
        </div>

          {/*Here is the div tag for the calendar */}
        <div className="calendar">
            <p>Calendar is here</p>
        </div>

        {/*Here we have the div tag for the next 3 upcoming modules*/}
        <div className="nextup">
            <div>M4G4</div>
            <div>M5G1</div>
            <div>M5G2</div>
        </div>
        </div>
        </>
    )
}

export default Profile;