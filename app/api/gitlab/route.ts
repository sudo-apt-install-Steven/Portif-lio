import { NextResponse } from "next/server";

export async function GET() {
  const domain = process.env.GITLAB_DOMAIN || "git.academico.vilhena.ifro.edu.br";
  const username = process.env.GITLAB_USER_ID_OR_USERNAME || "2024103030003";
  const token = process.env.GITLAB_PERSONAL_ACCESS_TOKEN || "glpat-3XMUzta7F7c8aRWTtC02oG86MQp1OjJkCA.01.0y0sd9mzk";

  const fallbackProjects = [
    {
      id: 1,
      name: "PizzariaTop",
      path_with_namespace: "Fabrica III -3B / PizzariaTop",
      description: "Sistema de gerenciamento e pedidos para pizzarias. O projeto inicial focado no desenvolvimento de uma aplicação web completa.",
      web_url: `https://${domain}/Fabrica-III-3B/PizzariaTop`,
      star_count: 0,
      forks_count: 0,
      visibility: "public",
      last_activity_at: new Date().toISOString(),
      deploy_url: null,
      techs: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
      id: 2,
      name: "PizzariaTop-React",
      path_with_namespace: "Fabrica III -3B / PizzariaTop-React",
      description: "Frontend moderno desenvolvido em React para o PizzariaTop, proporcionando uma experiência de usuário interativa, fluida, responsiva e performática.",
      web_url: `https://${domain}/Fabrica-III-3B/PizzariaTop-React`,
      star_count: 0,
      forks_count: 0,
      visibility: "private",
      last_activity_at: new Date().toISOString(),
      deploy_url: "https://pizzariatop.dev.vilhena.ifro.edu.br/",
      techs: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"]
    },
    {
      id: 3,
      name: "PizzariaTop-BackEnd",
      path_with_namespace: "Fabrica III -3B / PizzariaTop-BackEnd",
      description: "API RESTful robusta e escalável para o PizzariaTop. Responsável pela persistência de dados, autenticação segura, gestão de estoque e regras de negócios.",
      web_url: `https://${domain}/Fabrica-III-3B/PizzariaTop-BackEnd`,
      star_count: 0,
      forks_count: 0,
      visibility: "private",
      last_activity_at: new Date().toISOString(),
      deploy_url: "https://apipizzariatop.dev.vilhena.ifro.edu.br/",
      techs: ["Node.js", "Express", "Prisma", "PostgreSQL", "TypeScript"]
    }
  ];

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6 seconds timeout

    // We can search for the projects owned by the user, or part of their namespace
    const url = `https://${domain}/api/v4/projects?search=PizzariaTop&membership=true`;
    const response = await fetch(url, {
      headers: {
        "Private-Token": token
      },
      signal: controller.signal,
      next: { revalidate: 3600 } // cache for 1 hour
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn("GitLab API returned status:", response.status);
      return NextResponse.json({ projects: fallbackProjects, source: "fallback" });
    }

    const data = await response.json();
    
    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json({ projects: fallbackProjects, source: "fallback" });
    }

    const targetNames = ["pizzariatop", "pizzariatop-react", "pizzariatop-backend"];
    const filteredData = data.filter((p: any) => 
      targetNames.includes(p.name.toLowerCase()) || 
      targetNames.includes(p.path.toLowerCase())
    );

    if (filteredData.length === 0) {
      return NextResponse.json({ projects: fallbackProjects, source: "fallback" });
    }

    const projects = filteredData.map((p: any) => {
      let deploy_url = null;
      let techs: string[] = [];
      const lowerName = p.name.toLowerCase();

      if (lowerName.includes("react")) {
        deploy_url = "https://pizzariatop.dev.vilhena.ifro.edu.br/";
        techs = ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"];
      } else if (lowerName.includes("backend")) {
        deploy_url = "https://apipizzariatop.dev.vilhena.ifro.edu.br/";
        techs = ["Node.js", "Express", "Prisma", "PostgreSQL", "TypeScript"];
      } else {
        techs = ["HTML", "CSS", "JavaScript", "PHP"];
      }

      return {
        id: p.id,
        name: p.name,
        path_with_namespace: p.path_with_namespace || `Fabrica III -3B / ${p.name}`,
        description: p.description || fallbackProjects.find(f => f.name.toLowerCase() === lowerName)?.description || "",
        web_url: p.web_url,
        star_count: p.star_count || 0,
        forks_count: p.forks_count || 0,
        visibility: p.visibility || "private",
        last_activity_at: p.last_activity_at,
        deploy_url,
        techs
      };
    });

    // Make sure we have all 3, if not, fill in missing ones from fallback
    const finalProjects = [...projects];
    fallbackProjects.forEach(fallback => {
      const exists = finalProjects.some(p => p.name.toLowerCase() === fallback.name.toLowerCase());
      if (!exists) {
        finalProjects.push(fallback);
      }
    });

    // Sort by name so it's consistent
    finalProjects.sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json({ projects: finalProjects, source: "api" });

  } catch (error) {
    console.error("GitLab API error:", error);
    return NextResponse.json({ projects: fallbackProjects, source: "fallback" });
  }
}
