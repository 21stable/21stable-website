#!/bin/bash
# Generate images for Stable Website using local Ollama Flux model
# Usage: ./generate-flux-images.sh [logo|hero|all]

OLLAMA_URL="http://192.168.2.50:11434"
MODEL="x/flux2-klein:9b"
OUTPUT_DIR="/root/.openclaw/workspace/stable/stable-website/public/images"

mkdir -p "$OUTPUT_DIR"

# Check if model is available
echo "Checking for $MODEL..."
MODELS=$(curl -s "$OLLAMA_URL/api/tags")
if ! echo "$MODELS" | grep -q "$MODEL"; then
    echo "Model not found. Pulling $MODEL..."
    curl -s "$OLLAMA_URL/api/pull" -d "{\"name\": \"$MODEL\"}" | head -5
fi

generate_image() {
    local prompt="$1"
    local filename="$2"
    local outputPath="$OUTPUT_DIR/$filename"
    
    echo "Generating: $filename"
    echo "Prompt: $prompt"
    
    # Flux models use generate API with images output
    curl -s "$OLLAMA_URL/api/generate" \
        -d "{
            \"model\": \"$MODEL\",
            \"prompt\": \"$prompt\",
            \"stream\": false
        }" | python3 -c "
import sys, json, base64, os
data = json.load(sys.stdin)
if 'images' in data:
    img_data = base64.b64decode(data['images'][0])
    print('$outputPath')
    with open('$outputPath', 'wb') as f:
        f.write(img_data)
    print('Saved!')
elif 'response' in data:
    print('Text response:', data['response'][:200])
else:
    print('Unexpected response:', json.dumps(data, indent=2)[:500])
" || echo "Error generating $filename"
}

case "${1:-all}" in
    logo)
        generate_image \
            "minimalist abstract logo for statistical consulting company, black and white, clean geometric shapes, professional data science icon, simple elegant design, white background" \
            "logo.png"
        ;;
    hero)
        generate_image \
            "abstract minimalist data visualization, statistical curves flowing, monochromatic black and white, clean modern design, clinical trials data science, geometric patterns, white background" \
            "hero.png"
        ;;
    all)
        echo "Generating all images..."
        generate_image \
            "minimalist abstract logo for statistical consulting company called Stable, black and white, clean geometric shapes, professional data science, simple elegant design, white background" \
            "logo.png"
        generate_image \
            "abstract minimalist data visualization for hero section, statistical curves flowing elegantly, monochromatic black and white, clean modern corporate design, geometric patterns suggesting precision, white background" \
            "hero.png"
        ;;
    *)
        echo "Usage: $0 [logo|hero|all]"
        exit 1
        ;;
esac

echo "Done. Check $OUTPUT_DIR"