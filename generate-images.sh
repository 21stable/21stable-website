#!/bin/bash
# Gemini Image Generation for Stable Website
# Usage: ./generate-images.sh [logo|hero|icons|all]

GEMINI_KEY=$(cat /root/.openclaw/workspace/.secrets/gemini_api_key)
OUTPUT_DIR="/root/.openclaw/workspace/stable/stable-website/public/images"

mkdir -p "$OUTPUT_DIR"

generate_image() {
    local prompt="$1"
    local filename="$2"
    
    echo "Generating: $filename"
    
    curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=$GEMINI_KEY" \
        -H "Content-Type: application/json" \
        -d "{
            \"contents\": [{
                \"parts\": [{
                    \"text\": \"$prompt\"
                }]
            }],
            \"generationConfig\": {
                \"responseModalities\": [\"image\", \"text\"],
                \"responseMimeType\": \"image/png\"
            }
        }" \
        --output "$OUTPUT_DIR/$filename"
}

case "${1:-all}" in
    logo)
        generate_image \
            "Create a minimalist, abstract logo for a statistical consulting company called 'Stable'. The design should be clean, professional, using only black and white colors. The logo should evoke precision, data, and scientific rigor. Minimalist geometric shapes, perhaps incorporating stylized data points or a subtle chart element. Very simple, clean lines, suitable for a professional services firm." \
            "logo.png"
        ;;
    hero)
        generate_image \
            "Create a minimalist, abstract hero image for a statistical consulting website. The image should represent data science, clinical trials, and precision. Use a monochromatic black and white or greyscale palette. Clean geometric shapes suggesting data visualization, flowing lines representing statistical curves. Very subtle, professional, suitable for a corporate website header. Abstract and modern." \
            "hero.png"
        ;;
    icons)
        echo "Generating service icons..."
        for service in "clinical trials" "statistics" "data science" "regulatory" "bioinformatics"; do
            generate_image \
                "Create a minimalistic black and white icon representing $service. Clean line art style, suitable for a professional website. Simple, recognizable, modern design. White background, black lines." \
                "icon-${service// /-}.png"
        done
        ;;
    all)
        $0 logo
        $0 hero
        $0 icons
        ;;
    *)
        echo "Usage: $0 [logo|hero|icons|all]"
        exit 1
        ;;
esac

echo "Done. Images saved to $OUTPUT_DIR"