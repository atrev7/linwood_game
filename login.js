function checkBadge() {
    const input = document.getElementById("badgeInput").value.trim().toUpperCase();
    const marcoID = "MR12874";
    const leoID = "LL87567";
    const amandaID = "AR99152";

    document.getElementById("errorMessage").innerText = "";
    document.getElementById("marcoFiles").classList.add("hidden");
    document.getElementById("leoFiles").classList.add("hidden");
    document.getElementById("amandaFiles").classList.add("hidden");

    if (input === marcoID) {
        document.getElementById("marcoFiles").classList.remove("hidden");
    } else if (input === leoID) {
        document.getElementById("leoFiles").classList.remove("hidden");
    } else if (input === amandaID) {
        document.getElementById("amandaFiles").classList.remove("hidden");
    } else {
        document.getElementById("errorMessage").innerText = "Invalid badge ID. Please try again.";
    }
}
