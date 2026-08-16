/* Deployment-specific telemetry settings. Override before telemetry.js loads. */
window.SmartCITelemetryConfig = window.SmartCITelemetryConfig || {
  enabled: true,
  endpoint: "",
  consentRequired: true,
  batchSize: 20,
  flushIntervalMs: 10000,
  maxQueuedEvents: 200
};