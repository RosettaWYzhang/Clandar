import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @beta
 * @name Firebase
 * @description
 * This plugin brings push notifications, analytics, event tracking, crash reporting and more from Google Firebase to your Cordova project! Android and iOS supported (including iOS 10).
 *
 * @usage
 * ```typescript
 * import { Firebase } from '@ionic-native/firebase';
 *
 * constructor(private firebase: Firebase) { }
 *
 * ...
 *
 * this.firebase.getToken()
 *   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
 *   .catch(error => console.error('Error getting token', error));
 *
 * this.firebase.onTokenRefresh()
 *   .subscribe((token: string) => console.log(`Got a new token ${token}`));
 *
 * ```
 */
export declare class Firebase extends IonicNativePlugin {
    /**
     * Get the device token
     * @return {Promise<any>}
     */
    getToken(): Promise<any>;
    /**
     * Get notified when a token is refreshed
     * @return {Observable<any>}
     */
    onTokenRefresh(): Observable<any>;
    /**
     * Get notified when the user opens a notification
     * @return {Observable<any>}
     */
    onNotificationOpen(): Observable<any>;
    /**
     * Grant permission to receive push notifications
     * @return {Promise<any>}
     */
    grantPermission(): Promise<any>;
    /**
   * Check permission to receive push notifications
   * @return {Promise<any>}
   */
    hasPermission(): Promise<any>;
    /**
     * Set icon badge number. Set to 0 to clear the badge.
     * @param badgeNumber {number}
     * @return {Promise<any>}
     */
    setBadgeNumber(badgeNumber: number): Promise<any>;
    /**
     * Get icon badge number
     * @return {Promise<any>}
     */
    getBadgeNumber(): Promise<any>;
    /**
     * Subscribe to a topic
     * @param topic {string}
     * @return {Promise<any>}
     */
    subscribe(topic: string): Promise<any>;
    /**
     * Unsubscribe from a topic
     * @param topic {string}
     * @return {Promise<any>}
     */
    unsubscribe(topic: string): Promise<any>;
    /**
     * Unregister from firebase, used to stop receiving push notifications.
     * Call this when you logout user from your app.
     */
    unregister(): Promise<any>;
    /**
     * Log an event using Analytics
     * @param type {string}
     * @param data {Object}
     * @return {Promise<any>}
     */
    logEvent(type: string, data: any): Promise<any>;
    /**
     * Log an Error using FirebaseCrash
     * @param message {string}
     * @return {Promise<any>}
     */
    logError(message: string): Promise<any>;
    /**
     * Set the name of the current screen in Analytics
     * @param name {string} Screen name
     * @return {Promise<any>}
     */
    setScreenName(name: string): Promise<any>;
    /**
     * Set a user id for use in Analytics
     * @param userId {string}
     * @return {Promise<any>}
     */
    setUserId(userId: string): Promise<any>;
    /**
     * Set a user property for use in Analytics
     * @param name {string}
     * @param value {string}
     * @return {Promise<any>}
     */
    setUserProperty(name: string, value: string): Promise<any>;
    /**
     * Fetch Remote Config parameter values for your app
     * @param cacheExpirationSeconds
     * @return {Promise<any>}
     */
    fetch(cacheExpirationSeconds?: number): Promise<any>;
    /**
     * Activate the Remote Config fetched config
     * @return {Promise<any>}
     */
    activateFetched(): Promise<any>;
    /**
     * Retrieve a Remote Config value
     * @param key {string}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    getValue(key: string, namespace?: string): Promise<any>;
    /**
     * Retrieve a Remote Config byte array
     * @param key {string}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    getByteArray(key: string, namespace?: string): Promise<any>;
    /**
     * Get the current state of the FirebaseRemoteConfig singleton object
     * @return {Promise<any>}
     */
    getInfo(): Promise<any>;
    /**
     * Change the settings for the FirebaseRemoteConfig object's operations
     * @param settings {Object}
     * @return {Promise<any>}
     */
    setConfigSettings(settings: any): Promise<any>;
    /**
     * Set defaults in the Remote Config
     * @param defaults {Object}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    setDefaults(defaults: any, namespace: string): Promise<any>;
}
