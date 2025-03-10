"use client"
import Form from 'next/form'
import Styles from './KontaktForm.module.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateForm() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telefonNummer: "",
    nachricht: "",
  });
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Nachricht wurde erfolgreich gesendet!");
      setFormData({ firstName: "", lastName: "", email: "", telefonNummer: "", nachricht: "" });
      setTimeout(() => {
        router.push("/");
      }, 5000);

    } else {
      setStatus("Fehler beim Senden der Nachricht.");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} >
      <>
        <div className="container">
          <div className='card'>
            <div className='card-body'>
              <div className="col-12">
                <h3>Kontaktformular</h3>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      Vorname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Bitte gib hier deinen Vornamen ein</div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Nachname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Bitte gib hier deinen Nachnamen ein</div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-body-secondary"></span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="muster@beispiel.com"
                      required
                    />
                    <div className="invalid-feedback">
                      Bitte gib hier eine gültige Email Adresse ein
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="telefonNummer" className="form-label">
                      Telefonnummer <span className="text-body-secondary"></span>
                    </label>
                    <input
                      type="telefonNummer"
                      className="form-control"
                      id="telefonNummer"
                      name="telefonNummer"
                      value={formData.telefonNummer}
                      onChange={handleChange}
                      placeholder="000 000 00 00"
                      required
                    />
                    <div className="invalid-feedback">
                      Bitte gib hier eine gültige Telefonnummer ein
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="nachricht" className="form-label">
                      Nachricht <span className="text-body-secondary"></span>
                    </label>
                    <input
                      type="nachricht"
                      className="form-control"
                      id="nachricht"
                      name="nachricht"
                      value={formData.nachricht}
                      onChange={handleChange}
                      required
                    />
                    <div className="invalid-feedback">
                      Bitte gib hier eine Nachricht ein.
                    </div>
                  </div>
                </div>
                <hr className="my-4" />

                {/* Button mit Loading-Zustand */}
                <button type="submit" className="btn btn-success rounded-pill px-3" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    {" "}Wird gesendet...
                  </>
                ) : (
                  "Absenden"
                )}
              </button>
              {/* Statusnachricht */}
                {status && (
                  <div
                    className={`mt-3 p-3 border rounded ${status.includes("erfolgreich") ? "alert alert-success" : "alert alert-danger"
                      }`}
                    >
                    {status}
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