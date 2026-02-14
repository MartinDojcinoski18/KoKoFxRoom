class SoundService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.2; // Slightly adjusted volume for the cleaner sound

  constructor() {
    // We defer initialization until user interaction to comply with browser policies
  }

  private init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  public getMuteStatus() {
    return this.isMuted;
  }

  public async playHover() {
    // Hover sound disabled per user request ("samo koga stiskas")
    return;
  }

  public async playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') await this.ctx.resume();

    const t = this.ctx.currentTime;
    
    // Create a pleasant, subtle "glassy" click
    // Using Sine wave instead of Triangle for a cleaner, non-intrusive sound
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    
    // Frequency sweep: Start mid-high and drop fast. 
    // This creates a "tap" sound rather than a "beep".
    osc.frequency.setValueAtTime(600, t); 
    osc.frequency.exponentialRampToValueAtTime(100, t + 0.04);

    // Envelope: Very fast attack and decay
    // 0.04 seconds total duration - super short and snappy
    gain.gain.setValueAtTime(0.5 * this.volume, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.04);
  }
}

export const soundService = new SoundService();