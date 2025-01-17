package support.cpdanalysis.agent.service;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import com.google.gson.Gson;

@Service
public class ScrapingService {

    public String scraper(String url) {
        String userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

        try {
            // Connect to the URL and get the document
            Document doc = Jsoup.connect(url).userAgent(userAgent).timeout(10000).get();

            // Lists to hold the scraped data
            List<String> paragraphs = new ArrayList<>();
            List<String> links = new ArrayList<>();
            List<String> headings = new ArrayList<>();
            String allText = doc.text();

            // Scrape Paragraphs
            Elements paraElements = doc.select("p");
            for (Element p : paraElements) {
                paragraphs.add(p.text());
            }

            // Scrape Links
            Elements linkElements = doc.select("a[href]");
            for (Element link : linkElements) {
                links.add(link.text() + ": " + link.attr("href"));
            }

            // Scrape Headings
            Elements headingElements = doc.select("h1, h2, h3, h4, h5, h6");
            for (Element heading : headingElements) {
                headings.add(heading.tagName() + ": " + heading.text());
            }

            // Create a structured object with labeled fields for JSON
            // Creating a map-like structure
            DataWrapper dataWrapper = new DataWrapper();
            dataWrapper.paragraphs = paragraphs;
            dataWrapper.links = links;
            dataWrapper.headings = headings;
            dataWrapper.allText = allText;

            // Convert the data to JSON
            Gson gson = new Gson();
            String jsonData = gson.toJson(dataWrapper);

            // Write JSON to file
            FileWriter writer = new FileWriter("scraped_data.json");
            writer.write(jsonData);
            writer.close();

            return "Hi There.. I'm Up & Ready To Solve Your Queries";

        } catch (IOException e) {
            return "Ah Huh Sorry, Couldn't Fetch The Data ";
        }
    }

    // Simple structure to hold the scraped data in labeled fields
    public static class DataWrapper {
        public List<String> paragraphs;
        public List<String> links;
        public List<String> headings;
        public String allText;
    }
}
