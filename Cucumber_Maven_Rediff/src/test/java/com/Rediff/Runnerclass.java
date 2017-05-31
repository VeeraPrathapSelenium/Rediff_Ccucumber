package com.Rediff;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"features"},strict=true
,plugin={"pretty" , "html:HTML Report"}
,monochrome = true
)
public class Runnerclass {

}
