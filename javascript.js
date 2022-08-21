
        // Get the video
        var video = document.getElementById("myVideo");
        
        // Get the button
        var btn = document.getElementById("myBtn");
        
        // Pause and play the video, and change the button text
        function myFunction() {
          if (video.paused) {
            video.play();
            btn.innerHTML = "Pause";
          } else {
            video.pause();
            btn.innerHTML = "Play";
          }
        }
        const courses = [
            {
                header: "Cloud Storage- OneDrive",
                descript: "This is short course with video and pictures on Cloud Storage  OneDrive including small quiz in the end to conclude your progress. It will take less than 20mins to complete.",
                Title: "Cloud Storage",
                Duration: "15-20 min",
                Cost: 0,
                Level: "Beginner",
                slides: 8,
            }

        ]

        const slides = [
            {
                s1Header: "Cloud Storage- OneDrive",
                s1Descript: "Cloud storage is online storage provided by company for users to store their data and access it with from anywhere in the world with internet access. ",
                s11: "Provides online storage",
                s12: "Free-up device storage",
                s13: "Shareable folders and files",
                s14: "Secure and 24/7 availability",
                s15: "Top cloud-storage services and their provider.",
                s16: "OneDrive - Microsoft ",
                s17: "Google Drive - Google",
                s18: "Dropbox - Dropbox, Inc",
            },
            {
                s2Header: "OneDrive Introduction",
                //s2Src: "https://www.microsoft.com/en-us/videoplayer/embed/RWebsp?pid=ocpVideo0-innerdiv-oneplayer&maskLevel=20&market=en-us"
            }
        ]



        let vSlide = 0;
        function structure() {

            if (vSlide != 12) (document.getElementById("finish").style.display = "none");
            for (const key in courses[n]) {
                const g = document.getElementById(key)
                g.append(document.createTextNode(courses[n][key]))
            }
            for (m = 0; m < slides.length; m++)
                for (const key in slides[m]) {
                    const h = document.getElementById(key)
                    h.append(document.createTextNode(slides[m][key]))
                }

        }


        function slider(cmd) {
            console.log(vSlide);

            (document.getElementById(0).style.display = "none")
            for (i = 1; i < 13; i++)
                (document.getElementById(i).style.display = "none")


            if (cmd > 0) vSlide++
            else vSlide--

            if (vSlide == 12) {
                (document.getElementById("moveBck").style.display = "none");
                (document.getElementById("moveFwd").style.display = "none");
                (document.getElementById("finish").style.display = "block");
                (document.getElementById("sHeader").style.fontSize = "2em");
                (document.getElementById("sHeader").style.color = "black");

            }
            if (vSlide < 0)
                (vSlide = 0)

            document.getElementById(vSlide).style.display = "block";



        }




