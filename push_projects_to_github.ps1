# GitHub Auto-Publisher Script for Profile Projects
# Run after running: gh auth login

$ghPath = "C:\Program Files\GitHub CLI\gh.exe"
if (-not (Test-Path $ghPath)) {
    $ghPath = "gh"
}

$projects = @(
    @{ Name="airline-data-warehouse-powerbi"; Path="C:\Users\Afzal\Desktop\profile\projects\Airline Data Warehouse & Power BI Analytics"; Desc="Star Schema Data Warehouse in PostgreSQL & Power BI Dashboard for U.S. Flight Data" },
    @{ Name="airline-performance-analytics"; Path="C:\Users\Afzal\Desktop\profile\projects\End-to-End Airline Performance Analytics using PostgreSQL & Power BI"; Desc="End-to-End Airline Performance Analytics using PostgreSQL and Power BI" },
    @{ Name="medgraph-analytics"; Path="C:\Users\Afzal\Desktop\profile\projects\MedGraph-Analytics"; Desc="Graph ML & Full-Stack Biomedical Drug Repurposing Platform (Hetionet + Neo4j + FastAPI + Streamlit)" },
    @{ Name="nlp-multimodal-research"; Path="C:\Users\Afzal\Desktop\profile\projects\NLP Mini Project"; Desc="Aspect-Ratio Warping & Temporal Compression for Vision-Language Models (Qwen2.5-VL)" },
    @{ Name="realtime-obstacle-detector"; Path="C:\Users\Afzal\Desktop\profile\projects\Obstacle Detector"; Desc="Real-Time Computer Vision & Distance Estimation Safety System (YOLOv8 + OpenCV)" },
    @{ Name="recipe-site-traffic-prediction"; Path="C:\Users\Afzal\Desktop\profile\projects\Recipe Site Traffic"; Desc="Predictive Analytics & Content Optimization for High-Engagement Recipes" },
    @{ Name="walmart-retail-data-pipeline"; Path="C:\Users\Afzal\Desktop\profile\projects\Retail Data Pipeline"; Desc="Automated Multi-Format ETL Pipeline & Retail Data Integration Suite" },
    @{ Name="task-tracker-app"; Path="C:\Users\Afzal\Desktop\profile\projects\task-tracker"; Desc="Simple Task Tracker Web Application" },
    @{ Name="personal-portfolio-website"; Path="c:\Users\Afzal\Desktop\BS DS Batch 2023\Semester 7\Web Programming S7 2026\Assignments\Assignment 1\my-portfolio"; Desc="Personal Web Portfolio & Project Hub built with Vite, Tailwind CSS v4, and TypeScript" }
)

foreach ($proj in $projects) {
    Write-Host "=== Processing $($proj.Name) ===" -ForegroundColor Cyan
    if (Test-Path $proj.Path) {
        Set-Location $proj.Path
        if (-not (Test-Path ".git")) {
            git init
            git branch -M main
        }
        git add .
        git commit -m "Initial commit: $($proj.Desc)"
        
        Write-Host "Creating GitHub repository: $($proj.Name)..." -ForegroundColor Yellow
        & $ghPath repo create "$($proj.Name)" --public --description "$($proj.Desc)" --source="." --remote="origin" --push
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Successfully published $($proj.Name)!" -ForegroundColor Green
        } else {
            Write-Host "Failed to create/push $($proj.Name). Trying push directly..." -ForegroundColor Red
            git push -u origin main
        }
    } else {
        Write-Host "Path not found: $($proj.Path)" -ForegroundColor Red
    }
}
