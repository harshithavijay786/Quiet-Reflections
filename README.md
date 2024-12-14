QUIET REFLECTIONS:
    "Quiet Reflections" is a serene journal app designed to inspire mindfulness and personal growth. It offers a calming, intuitive space for users to reflect on daily thoughts, set personal goals, and track emotional well-being. Perfect for quiet moments, it encourages consistent journaling to cultivate inner peace and clarity.

ERD:
    ![ERD Diagram](/public/assets/ERD.PNG)

Relations:
    ![Relations](/public/assets/Relations.jpg)

Database:
    CREATE DATABASE quiet_reflections;

    CREATE TABLE IF NOT EXISTS quiet_reflections.user (user_id INT NOT NULL AUTO_INCREMENT , first_name VARCHAR(40) NOT NULL , last_name VARCHAR(40) NOT NULL , user_name VARCHAR(40) NOT NULL , email_id VARCHAR(40) NOT NULL , dob VARCHAR(10) NOT NULL , password VARCHAR(40) NOT NULL , PRIMARY KEY (user_id)) ENGINE = InnoDB;

![User](/public/assets/user.png)

    CREATE TABLE IF NOT EXISTS quiet_reflections.quiet_reflection (quiet_reflection_id INT NOT NULL AUTO_INCREMENT , notes TEXT NOT NULL , user_id INT NOT NULL , PRIMARY KEY (quiet_reflection_id) , FOREIGN KEY (user_id) REFERENCES user(user_id)) ENGINE = InnoDB;

![QuietReflection](/public/assets/quiet_reflection.png)

    CREATE TABLE IF NOT EXISTS quiet_reflections.comments (comments_id INT NOT NULL AUTO_INCREMENT , description TEXT NOT NULL , quiet_reflection_id INT NOT NULL , user_id INT NOT NULL , PRIMARY KEY (comments_id), FOREIGN KEY (quiet_reflection_id) REFERENCES quiet_reflection(quiet_reflection_id), FOREIGN KEY (user_id) REFERENCES user(user_id)) ENGINE = InnoDB;

![Comments](/public/assets/comments.png)
