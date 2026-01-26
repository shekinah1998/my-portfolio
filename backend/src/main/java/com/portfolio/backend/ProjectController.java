package com.portfolio.backend;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Allows React to talk to Java
public class ProjectController {

    // --- 1. PROJECT CARDS (With Images) ---
    @GetMapping("/projects")
    public List<Project> getProjects() {
        return List.of(
                new Project(
                        "Fresh Produce E-commerce",
                        "Full-stack app using Spring Boot & React. Automated deployments with Jenkins.",
                        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=600", // Fruit Image
                        "https://github.com/yourusername/project1"
                ),
                new Project(
                        "3-Tier DevOps Architecture",
                        "Deployed on AWS EKS using Docker, Kubernetes, and Terraform.",
                        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600", // Cloud Server Image
                        "https://github.com/shekinah1998/DevOps_End_To_End_Project.git"
                ),
                new Project(
                        "Baby Product Aggregator",
                        "Java/Spring Boot app for developmental toys with science-based filtering.",
                        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=600", // Toy Image
                        "https://github.com/yourusername/project3"
                )
        );
    }

    // --- 2. RESUME DATA (Fixed Skills Logic) ---
    @GetMapping("/resume")
    public ResumeData getResume() {
        ResumeData resume = new ResumeData();

        // A. Header Info
        resume.setName("Shekinah Sardonyx Yadala");
        resume.setEmail("sardonyxyadala@outlook.com");
        resume.setLinkedin("https://www.linkedin.com/in/shekinah-sardonyx-yadala/");
        resume.setSummary("Software Engineer with experience in full-stack development, cloud computing, and DevOps. Skilled in Java, Spring Boot, React.js, and AWS. Proficient in CI/CD pipelines, Docker, Kubernetes, and Microservices.");

        // B. Education
        ResumeData.Education edu1 = new ResumeData.Education();
        edu1.setSchool("Campbellsville University");
        edu1.setDegree("M.S. Computer Science");
        edu1.setYear("Aug 2025");
        edu1.setGpa("3.8/4.0");

        ResumeData.Education edu2 = new ResumeData.Education();
        edu2.setSchool("Jawaharlal Nehru Technological University");
        edu2.setDegree("B.Tech. Electrical & Electronic Engineering");
        edu2.setYear("Hyderabad, India");
        edu2.setGpa("");

        resume.setEducation(List.of(edu1, edu2));

        // C. SKILLS (The Fixed Part)
        // I have converted all List.of() errors into simple Strings with commas.

        ResumeData.SkillSection cloud = new ResumeData.SkillSection();
        cloud.setCategory("Cloud");
        cloud.setItems("AWS EKS, AWS EC2, AWS S3, IAM, DynamoDB, AWS VPC, Route 53, CloudWatch, SageMaker, Bedrock");

        ResumeData.SkillSection devops = new ResumeData.SkillSection();
        devops.setCategory("DevOps");
        devops.setItems("Jenkins, Terraform, Docker, Kubernetes, Git, ArgoCD, Prometheus, Ansible");

        ResumeData.SkillSection monitor = new ResumeData.SkillSection();
        monitor.setCategory("Monitoring");
        monitor.setItems("Prometheus, Grafana, ELK Stack, Alertmanager, CloudWatch, Slack");

        ResumeData.SkillSection dev = new ResumeData.SkillSection();
        dev.setCategory("Languages / Frameworks");
        dev.setItems("Java, Spring Boot, React.js, Python, REST APIs, Microservices, HTML/CSS");

        ResumeData.SkillSection databases = new ResumeData.SkillSection();
        databases.setCategory("Databases / Tools");
        databases.setItems("MySQL, MongoDB, DynamoDB, Linux, VS Code, Postman, JUnit, Gradle");

        resume.setSkills(List.of(cloud, devops, monitor, dev, databases));

        // D. Experience
        ResumeData.Experience exp1 = new ResumeData.Experience();
        exp1.setCompany("Sports Media Inc.");
        exp1.setRole("Software Engineer Intern");
        exp1.setDuration("Oct 2025 - Present");
        exp1.setDetails(List.of(
                "Implemented frontend UI enhancements and feature updates for internal applications.",
                "Managed Git workflows across multiple projects, maintaining clean branches.",
                "Assisted gaming team with CI pipeline automation and Python backend tasks."
        ));

        ResumeData.Experience exp2 = new ResumeData.Experience();
        exp2.setCompany("Capgemini Technology Services");
        exp2.setRole("Junior Software Engineer");
        exp2.setDuration("Jan 2022 - Dec 2022");
        exp2.setDetails(List.of(
                "Developed enterprise applications using Java, Spring Boot, React.js, and MySQL.",
                "Built REST APIs and optimized application performance.",
                "Collaborated in Agile teams and performed unit testing using JUnit."
        ));

        resume.setExperience(List.of(exp1, exp2));

        return resume;
    }

    // --- 3. CONTACT FORM ---
    @PostMapping("/contact")
    public String submitContact(@RequestBody ContactForm form) {
        System.out.println("NEW MESSAGE: " + form.getName() + " says: " + form.getMessage());
        return "Message received! Thanks, " + form.getName();
    }
}