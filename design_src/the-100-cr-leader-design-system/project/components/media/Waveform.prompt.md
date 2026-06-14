`Waveform` draws the signature audio motif - the chunky white capsules behind the hero, and the dense playback bars inside episode players.

```jsx
<Waveform variant="hero" height={220} />
<Waveform variant="track" progress={0.42} seed="ep1" height={48} />
```

`hero` is decorative (sparse capsules); `track` shows played vs. unplayed bars driven by `progress`. Use a unique `seed` per track so patterns differ.
