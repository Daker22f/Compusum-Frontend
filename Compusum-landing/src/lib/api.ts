// ─── Base URL ─────────────────────────────────────────────────────────────────
const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

// ─── Types ────────────────────────────────────────────────────────────────────

/** GET /services */
export interface Service {
    id: number;
    title: string;
    description: string;
    /** URL de la imagen del servicio (o null si no hay) */
    image_url: string | null;
    /** Clave de icono (lucide-react). Ej: "Sun", "Battery", "Zap", "Wrench" */
    icon: string;
    order: number;
}

/** GET /site-settings */
export interface SiteSettings {
    company_name: string;
    tagline: string;
    phone_primary: string;
    phone_secondary: string | null;
    email: string;
    address: string;
    whatsapp_number: string;
    founding_year: number;
    years_experience: number;
    projects_count: string;
    schedule: string;
}

/** GET /team */
export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string | null;
    photo_url: string | null;
    order: number;
}

/** GET /completed-projects */
export interface CompletedProject {
    id: number;
    title: string;
    category: string;
    image_url: string;
    description: string | null;
    year: number | null;
    order: number;
}

/** POST /service-requests – body */
export interface ServiceRequestBody {
    name: string;
    email: string;
    phone: string;
    service_type: string;
    message: string;
}

/** POST /service-requests – response */
export interface ServiceRequestResponse {
    id: number;
    status: "pending" | "contacted" | "completed";
    created_at: string;
    message: string;
}

// ─── Generic fetcher ──────────────────────────────────────────────────────────

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });

    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`API ${res.status}: ${text || res.statusText}`);
    }

    return res.json() as Promise<T>;
}

// ─── API functions ─────────────────────────────────────────────────────────────

/** Retorna lista de servicios ordenados por `order` */
export async function getServices(): Promise<Service[]> {
    return apiFetch<Service[]>("/services");
}

/** Retorna configuración del sitio (nombre, teléfono, dirección, etc.) */
export async function getSiteSettings(): Promise<SiteSettings> {
    return apiFetch<SiteSettings>("/site-settings");
}

/** Retorna miembros del equipo ordenados por `order` */
export async function getTeam(): Promise<TeamMember[]> {
    return apiFetch<TeamMember[]>("/team");
}

/** Retorna proyectos completados ordenados por `order` */
export async function getCompletedProjects(): Promise<CompletedProject[]> {
    return apiFetch<CompletedProject[]>("/completed-projects");
}

/**
 * Envía una solicitud de servicio al backend.
 * @throws Error si el servidor responde con un código de error
 */
export async function postServiceRequest(
    body: ServiceRequestBody
): Promise<ServiceRequestResponse> {
    return apiFetch<ServiceRequestResponse>("/service-requests", {
        method: "POST",
        body: JSON.stringify(body),
    });
}
