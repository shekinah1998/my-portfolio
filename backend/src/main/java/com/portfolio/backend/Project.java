package com.portfolio.backend;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class Project {
    private String title;
    private String description;
    private String imageUrl; // URL to a screenshot
    private String projectUrl; // URL to GitHub or Live Demo
}