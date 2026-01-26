package com.portfolio.backend;

import lombok.Data;
import java.util.List;

@Data
public class ResumeData {
    private String name;
    private String email;
    private String linkedin;
    private String summary;
    private List<Education> education;
    private List<SkillSection> skills;
    private List<Experience> experience;

    @Data
    public static class Education {
        private String school;
        private String degree;
        private String year;
        private String gpa;
    }

    @Data
    public static class SkillSection {
        private String category;
        private String items; // <--- This MUST be String, not List<String>
    }

    @Data
    public static class Experience {
        private String company;
        private String role;
        private String duration;
        private List<String> details;
    }
}