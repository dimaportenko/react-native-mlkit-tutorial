package com.rnmlkittutorial.mlkit;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Dmytro Portenko on 14.07.2021.
 */
public class TextRecognitionModule extends ReactContextBaseJavaModule {
    TextRecognitionModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "TextRecognitionModule";
    }

    @ReactMethod
    public void recognizeImage(String url) {
        Log.d("TextRecognitionModule", "Url: " + url);
    }
}
