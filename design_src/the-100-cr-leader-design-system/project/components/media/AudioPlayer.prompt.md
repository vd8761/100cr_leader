`AudioPlayer` is the inline episode player: a circular play/pause control, the waveform scrubber, and a timecode. Toggling play fills the button; clicking the waveform moves the scrubber.

```jsx
<AudioPlayer seed="ep1" current="04:24" total="09:45" progress={0.42} />
```

Visual only - no real audio. Used inside `EpisodeCard`.
