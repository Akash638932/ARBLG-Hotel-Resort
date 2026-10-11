document.addEventListener("DOMContentLoaded", function () {

    /* ==============================
       ELEMENTS
    ============================== */

    const mobileTab =
        document.getElementById("mobileTab");

    const emailTab =
        document.getElementById("emailTab");

    const mobileBox =
        document.getElementById("mobileBox");

    const emailBox =
        document.getElementById("emailBox");

    const mobileInput =
        document.getElementById("mobileInput");

    const emailInput =
        document.getElementById("emailInput");

    const termsCheck =
        document.getElementById("termsCheck");

    const joinForm =
        document.getElementById("joinForm");

    const closeBtn =
        document.getElementById("closeBtn");

    const chatBtn =
        document.getElementById("chatBtn");


    /* ==============================
       MOBILE TAB
    ============================== */

    mobileTab.addEventListener("click", function () {

        mobileTab.classList.add("active");
        emailTab.classList.remove("active");

        mobileBox.classList.remove("hidden");
        emailBox.classList.add("hidden");

        mobileInput.focus();

    });


    /* ==============================
       EMAIL TAB
    ============================== */

    emailTab.addEventListener("click", function () {

        emailTab.classList.add("active");
        mobileTab.classList.remove("active");

        emailBox.classList.remove("hidden");
        mobileBox.classList.add("hidden");

        emailInput.focus();

    });


    /* ==============================
       MOBILE ONLY NUMBERS
    ============================== */

    mobileInput.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "");

        if (this.value.length > 10) {
            this.value = this.value.substring(0, 10);
        }

    });


    /* ==============================
       CONTINUE
    ============================== */

    joinForm.addEventListener("submit", function (event) {

        event.preventDefault();


        if (!termsCheck.checked) {

            alert(
                "Please accept Terms of Use and Privacy Policy."
            );

            return;
        }


        /* MOBILE LOGIN */

        if (!mobileBox.classList.contains("hidden")) {

            const mobile =
                mobileInput.value.trim();

            if (mobile.length !== 10) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                mobileInput.focus();

                return;
            }


            alert(
                "OTP will be sent to +91 " + mobile
            );

            return;
        }


        /* EMAIL LOGIN */

        if (!emailBox.classList.contains("hidden")) {

            const email =
                emailInput.value.trim();

            if (!email || !email.includes("@")) {

                alert(
                    "Please enter a valid email address."
                );

                emailInput.focus();

                return;
            }


            alert(
                "OTP / verification link will be sent to " + email
            );

        }

    });


    /* ==============================
       CLOSE
    ============================== */

    closeBtn.addEventListener("click", function () {

        window.location.href = "index.html";

    });


    /* ==============================
       CHAT
    ============================== */

    chatBtn.addEventListener("click", function () {

        alert(
            "Hello! 👋\nWelcome to ARBLG.\nHow can we help you?"
        );

    });

});