package support.cpdanalysis.agent.service;


import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class LlmQueryService {

   

    private static final String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
    private static final String GEMINI_API_KEY = "AIzaSyAXkfaIUjGLPKMIMLKzmwxjORyirzr7ing";

    public String queryGemini(String question) {
        try {
            // Step 1: Read the scraped JSON file
            String scrapedData = new String(Files.readAllBytes(Paths.get("scraped_data.json")));

            // Step 2: Format the prompt for Gemini
            String prompt = "You are an intelligent assistant. Below is the structured data scraped from a website. Use this data to answer the question accurately and concisely.\n\n" +
                            "Scraped Data:\n" + scrapedData + "\n\n" +
                            "Question: " + question + "\n\n" +
                            "Please provide the most relevant and accurate response based on the data provided.";
                            

            // Step 3: Send the prompt to the Gemini API
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type", "application/json");

            // Create the JSON payload
            String requestPayload = "{\n" +
                    "  \"contents\": [{\n" +
                    "    \"parts\": [{\n" +
                    "      \"text\": \"" + prompt.replace("\"", "\\\"") + "\"\n" +
                    "    }]\n" +
                    "  }]\n" +
                    "}";

            HttpEntity<String> requestEntity = new HttpEntity<>(requestPayload, headers);
            String requestUrl = GEMINI_API_URL + "?key=" + GEMINI_API_KEY;

            ResponseEntity<String> response = restTemplate.postForEntity(requestUrl, requestEntity, String.class);

            // Step 4: Parse and return the Gemini API's response
            return response.getBody();

        } catch (IOException e) {
            return "Failed to process the scraped data: " + e.getMessage();
        } catch (Exception e) {
            return "An error occurred while querying the Gemini API: " + e.getMessage();
        }
    }
}
