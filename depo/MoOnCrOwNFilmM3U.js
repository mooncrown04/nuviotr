async function loadRemoteProvider() {
 const remoteUrl = "https://raw.githubusercontent.com/mooncrown04/nuviotr/refs/heads/main/providers/MoOnCrOwNFilmM3U.js";
    try {
        const response = await fetch(remoteUrl);
        const code = await response.text();
        // Uzak sunucudaki kodu çalıştırır
        eval(code); 
    } catch (e) {
        console.error("Sağlayıcı yüklenemedi:", e);
    }
}

loadRemoteProvider();
