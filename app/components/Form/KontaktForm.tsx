"use client"

import Form from 'next/form'
import Style from '../components/Form/KontaktForm.module.scss'


export default function CreateForm() {
  //Das Model für das Formular wird initialisiert.
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telefonNummer: "",
    nachricht: "",
  });

  // UseState Variablen werden initialisiert (Reagiert auf Zustandsänderungen).
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState<number>(5);

  useEffect(() => {
    if (timer === 0) {
      router.push("/"); // Weiterleitung nach 0 Sekunden
    }
  }, [timer, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  ///Führt den E-Mail Sendevorgang durch
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    //Ist das Captcha Token enthalten?
    if (!captchaToken) {
      setStatus("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
      setIsLoading(false);
      return;
    }

    //Sendet die Daten des Formulars an die Api.

    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, captchaToken }),
    });

    const responseData = await response.json();
    console.log("Response Data: ", responseData);

    //War das senden erfolgreich?
    if (response.ok) {
      setStatus("Nachricht wurde erfolgreich gesendet!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        telefonNummer: "",
        nachricht: "",
      });

      // Start Timer für Weiterleitung
      const countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(countdown);
            return 0; // Timer stoppen
          }
          return prevTimer - 1;
        });
      }, 1000); // Update alle 1 Sekunde
    } else {
      setStatus("Fehler beim Senden der Nachricht.");
    }
    setIsLoading(false);
  };

  return (
    <Form action="/search" >
      <>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div
            className="card"
            style={{ border: "#bfd59ec4", borderRadius: "0.75rem" }}
          >
            <div
              className="card-body"
              style={{
                color: "#ffffffb0",
                backgroundColor: "#bfd59ec4",
                borderRadius: "0.75rem",
              }}
            >
              <div className="col-12">
                <h3 style={{ color: "#2D4A00" }}>Kontakt aufnehmen</h3>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label
                      htmlFor="firstName"
                      className="form-label"
                      style={{ color: "#2D4A00" }}
                    >
                      Vorname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{
                        backgroundColor: "#ffffffb0",
                        borderColor: "#393939",
                      }}
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder=""
                      aria-label="Das Eingabefeld für den Vornamen"
                      required
                    />
                    <div className="invalid-feedback">
                      Bitte gib hier deinen Vornamen ein
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label
                      htmlFor="lastName"
                      className="form-label"
                      style={{ color: "#2D4A00" }}
                    >
                      Nachname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      style={{
                        backgroundColor: "#ffffffb0",
                        borderColor: "#393939",
                      }}
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder=""
                      aria-label="Das Eingabefeld für den Nachnamen"
                      required
                    />
                    <div className="invalid-feedback">
                      Bitte gib hier deinen Nachnamen ein
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label
                      htmlFor="email"
                      className="form-label"
                      style={{ color: "#2D4A00" }}
                    >
                      Email <span className="text-body-secondary"></span>
                    </label>
                    <input
                      type="email"
                      style={{
                        backgroundColor: "#ffffffb0",
                        borderColor: "#393939",
                      }}
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="muster@beispiel.com"
                      aria-label="Das Eingabefeld für die E-Mail Adresse"
                      required
                    />
                    <div
                      className="invalid-feedback"
                      aria-label="Bitte geben Sie eine gültige E-Mail Adresse ein"
                    >
                      Bitte gib hier eine gültige Email Adresse ein
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label
                      htmlFor="telefonNummer"
                      className="form-label"
                      style={{ color: "#2D4A00" }}
                    >
                      Telefonnummer{" "}
                      <span className="text-body-secondary"></span>
                    </label>
                    <input
                      type="telefonNummer"
                      className="form-control"
                      style={{
                        backgroundColor: "#ffffffb0",
                        borderColor: "#393939",
                      }}
                      id="telefonNummer"
                      name="telefonNummer"
                      value={formData.telefonNummer}
                      onChange={handleChange}
                      placeholder="(Optional)"
                      aria-label="Das Eingabefeld für die Telefonnummer. Diese Eingabe ist optional."
                    />
                    <div className="invalid-feedback">
                      Bitte gib hier eine gültige Telefonnummer ein
                    </div>
                  </div>

                  <div className="col-12">
                    <label
                      htmlFor="nachricht"
                      className="form-label"
                      style={{ color: "#2D4A00" }}
                    >
                      Nachricht <span className="text-body-secondary"></span>
                    </label>
                    <textarea
                      className="form-control"
                      style={{
                        backgroundColor: "#ffffffb0",
                        borderColor: "#393939",
                      }}
                      rows={3}
                      id="nachricht"
                      name="nachricht"
                      value={formData.nachricht}
                      onChange={handleChange}
                      placeholder="Ihre Nachricht"
                      aria-label="Das Eingabefeld für Ihre Nachricht."
                      required
                    />
                    <div
                      className="invalid-feedback"
                      style={{ color: "#2D4A00" }}
                    >
                      Bitte gib hier eine Nachricht ein.
                    </div>
                  </div>
                </div>
                <hr className="my-4" />

                {/* Verwende die Google-reCAPTCHA Komponente. */}
                <ReCAPTCHA
                  aria-label="Bestätigung, dass Sie kein Roboter sind"
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={(token) => setCaptchaToken(token)}
                />

                {/* Button mit Loading-Zustand */}
                <button
                  type="submit"
                  className="btn btn-success rounded-pill px-3"
                  style={{ marginTop: "1rem" }}
                  disabled={isLoading}
                  aria-label={
                    isLoading ? "Nachricht wird gesendet" : "Formular absenden"
                  }
                >
                  {isLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        style={{ color: "#2D4A00" }}
                        role="status"
                        aria-hidden="true"
                      ></span>{" "}
                      Wird gesendet...
                    </>
                  ) : (
                    "Absenden"
                  )}
                </button>
                {/* Statusnachricht */}
                {status && (
                  <div
                    className={`mt-3 p-3 border rounded ${
                      status.includes("erfolgreich")
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }`}
                    role="alert"
                    aria-live="polite"
                  >
                    {status}
                  </div>
                )}

                {/* Timer für Weiterleitung */}
                {status === "Nachricht wurde erfolgreich gesendet!" && (
                  <div className="mt-3" style={{ color: "#2D4A00" }}>
                    Weiterleitung auf die Hauptseite in <strong>{timer}</strong>{" "}
                    Sekunde{timer !== 1 ? "n" : ""}...
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </form>
  );
}
