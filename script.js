const whatsappLink = document.getElementById("whatsapp-link");

if (whatsappLink) {
  const message = encodeURIComponent(
    "Hi! I'm interested in the Livadi Bay, Kefalonia property. Could you share more details?"
  );
  whatsappLink.href = `https://wa.me/?text=${message}`;
}
