// =====================================================
// ARBLG LOGIN / JOIN JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================================
    // ELEMENTS
    // =================================================

    const closeBtn =
        document.getElementById("closeBtn");

    const joinBtn =
        document.getElementById("joinBtn");

    const continueBtn =
        document.getElementById("continueBtn");

    const loginInput =
        document.getElementById("loginInput");

    const terms =
        document.getElementById("terms");

    const loginTabs =
        document.querySelectorAll(".login-tab");

    const chatButton =
        document.getElementById("chatButton");


    // =================================================
    // CLOSE BUTTON
    // =================================================

    closeBtn?.addEventListener("click", function () {

        // Back to previous page
        if (document.referrer) {
            window.history.back();
        } else {
            window.location.href = "index.html";
        }

    });


    // =================================================
    // JOIN NOW
    // =================================================

    joinBtn?.addEventListener("click", function () {

        // Join page
        window.location.href = "join.html";

    });


    // =================================================
    // LOGIN TABS
    // =================================================

    loginTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            loginTabs.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

            const type =
                this.dataset.type;


            // MOBILE
            if (type === "mobile") {

                loginInput.type = "tel";

                loginInput.placeholder =
                    "Enter your mobile number";

                loginInput.value = "";

            }


            // EMAIL
            if (type === "email") {

                loginInput.type = "email";

                loginInput.placeholder =
                    "Enter your email address";

                loginInput.value = "";

            }


            // MEMBERSHIP
            if (type === "membership") {

                loginInput.type = "text";

                loginInput.placeholder =
                    "Enter your membership number";

                loginInput.value = "";

            }

        });

    });


    // =================================================
    // INPUT VALIDATION
    // =================================================

    loginInput?.addEventListener("input", function () {

        const activeTab =
            document.querySelector(".login-tab.active");

        const type =
            activeTab?.dataset.type;


        if (type === "mobile") {

            // Only numbers
            this.value =
                this.value.replace(/\D/g, "");

            // Maximum 10 digits
            this.value =
                this.value.substring(0, 10);

        }

    });


    // =================================================
    // CONTINUE BUTTON
    // =================================================

    continueBtn?.addEventListener("click", function () {

        const value =
            loginInput.value.trim();


        // Terms check
        if (!terms.checked) {

            alert(
                "Please accept the Terms of Use and Privacy Policy."
            );

            return;
        }


        // Empty input
        if (!value) {

            alert(
                "Please enter your login details."
            );

            loginInput.focus();

            return;
        }


        // Mobile validation
        const activeTab =
            document.querySelector(".login-tab.active");


        if (
            activeTab &&
            activeTab.dataset.type === "mobile"
        ) {

            if (value.length !== 10) {

                alert(
                    "Please enter a valid 10-digit mobile number."
                );

                loginInput.focus();

                return;
            }

        }


        // Success
        alert(
            "OTP has been requested successfully."
        );

    });


    // =================================================
    // CHAT
    // =================================================

    chatButton?.addEventListener("click", function () {

        alert(
            "Hello! 👋\nWelcome to ARBLG.\nHow can we help you?"
        );

    });

});