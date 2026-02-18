// frontend/src/data.js

export const projects = [
  {
    id: 1,
    title: "My Portfolio",
    description: "A personal portfolio built with React.",
    technologies: ["React", "CSS", "Vercel"],
    link: "https://github.com/shekinah1998/my-portfolio"
  },
  {
    id: 2,
    title: "Team-Dashboard",
    description: "A professional dashboard created to manage the documents that are shared and to track the progress and tasks assigned to the team members.",
    technologies: ["JavaScript", "HTML", "CSS", "Vercel", "Google Sheets", "JSON"],
    link: "https://github.com/shekinah1998/team-dashboard"
  },
  {
    id: 3,
    title: "DevOps_End_To_End_Project",
    description: "This project demonstrates a complete DevOps pipeline for deploying EasyShop, a modern e-commerce application built with Next.js, TypeScript, and MongoDB. The goal was to design, automate, and deploy a scalable cloud-based infrastructure using AWS and industry-standard DevOps tools.",
    technologies: [
      "AWS (EC2, EKS, Route53, IAM, ALB, EBS)", 
      "IaC: Terraform", 
      "CI/CD: Jenkins, GitHub", 
      "Containerization: Docker",
      "Orchestration: Kubernetes", 
      "Deployment Automation: Argo CD", 
      "Monitoring & Logging: Prometheus, Grafana, Elasticsearch, Kibana, Filebeat, Alertmanager", 
      "Version Control: Git & GitHub"
    ],
    link: "https://github.com/shekinah1998/DevOps_End_To_End_Project"
  },
  {
    id: 4,
    title: "Fresh Produce E-commerce Platform", 
    description: "Built a full-stack application using Spring Boot and React.js with MySQL/DynamoDB backend. Automated builds and deployments with Jenkins and Terraform; developed RESTful APIs and tested using Postman.", 
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "DynamoDB", "Jenkins", "Terraform", "Git"], 
    link: "https://github.com/shekinah1998/fresh-produce-ecommerce"
  },
  {
    id: 5,
    title: "3-Tier DevOps Application - AWS EKS", 
    description: "Deployed a three-tier web application on AWS EKS using Docker, Kubernetes, and Terraform. Built CI/CD pipelines with Jenkins and Argo CD; monitored via Prometheus, Grafana, and ELK. Configured Route 53, DynamoDB, and Slack alerts.", 
    technologies: ["AWS (EKS, EC2, S3, IAM, Route 53, DynamoDB)", "Docker", "Jenkins", "Argo CD", "Terraform", "Prometheus", "Grafana", "Kibana"], 
    link: ""
  }
];

export const experience = [
  {
    id: 1,
    role: "Software Engineer Intern", 
    company: "Sports Media Inc.", 
    duration: "Oct 2025 - Present", 
    description: `• Implemented frontend UI enhancements and feature updates for internal applications.
• Managed Git workflows across multiple projects, maintaining clean branches and commits.
• Built end-to-end application flows using ChatGPT, GitHub Copilot, Claude, and Perplexity. Developed a personal project applying internship learning.
• Assisted the gaming team with CI pipeline automation; onboarding to backend Python tasks.` 
  },
  {
    id: 2,
    role: "Junior Software Engineer", 
    company: "Capgemini Technology Services India Pvt. Ltd.", 
    duration: "Jan 2022 - Dec 2022", 
    description: `• Developed enterprise applications using Java, Spring Boot, React.js, and MySQL.
• Built REST APIs, collaborated in Agile teams, and optimized UI and performance.
• Enhanced UI functionality, optimized application performance, and ensured seamless frontend-backend integration.
• Assisted with build and deployment activities and supported CI workflows in lower environments.
• Performed unit and integration testing using JUnit and Postman to validate application functionality.` 
  }
];

export const education = [
    {
      id: 1,
      degree: "M.S. Computer Science", 
      school: "Campbellsville University", 
      year: "Aug 2025", 
      description: "GPA: 3.8/4.0 | Coursework: Advanced OS, Advanced Programming Languages, Advanced Databases, Computer Networking, Cyber Security, Software Engineering, AI, Emerging Technologies" 
    },
    {
      id: 2,
      degree: "B.Tech. Electrical & Electronic Engineering", 
      school: "Jawaharlal Nehru Technological University", 
      year: "Graduated",
      description: ""
    }
];

export const skills = [
  "AWS (EKS, EC2, S3, IAM, VPC, Route 53, CloudWatch, DynamoDB, SageMaker, Bedrock)", 
  "Jenkins", "Argo CD", "Terraform", "Docker", "Kubernetes", "Ansible", "Git", "GitHub", "CloudFormation", 
  "Prometheus", "Grafana", "ELK Stack", "Alertmanager", "Slack", 
  "Java", "Python", "Bash", "Spring Boot", "React.js", "JavaScript", "HTML", "CSS", 
  "MySQL", "MongoDB", "DynamoDB", "Linux", "VS Code", "Postman", "JUnit", "Gradle" 
];