package support.cpdanalysis.agent.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import support.cpdanalysis.agent.model.ChatLog;
import support.cpdanalysis.agent.service.LlmQueryService;
import support.cpdanalysis.agent.service.ScrapingService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AnchorController {

    @Autowired
     ScrapingService scrapingService;

     @Autowired
     LlmQueryService llmQueryService;

     @PostMapping
     public String getUrls(@RequestParam("url") String url){
        return scrapingService.scraper(url);
     }

     @PostMapping("/ask")
     public String askQuestions(@RequestBody ChatLog chatLog){
      String response =llmQueryService.queryGemini(chatLog.getQue());
      return response;
     }


}
