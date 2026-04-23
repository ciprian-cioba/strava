import json

# --- CONFIGURATION ---
MAX_HR = 185  # Update this to your actual Max HR
# Pace zones in seconds per km (e.g., 300 = 5:00/km)
PACE_ZONES = [
    ("Z1 Recovery", 360, 9999), # Slower than 6:00
    ("Z2 Aerobic", 315, 360),   # 5:15 - 6:00
    ("Z3 Steady", 280, 315),    # 4:40 - 5:15
    ("Z4 Threshold", 250, 280), # 4:10 - 4:40
    ("Z5 Interval", 0, 250)     # Faster than 4:10
]

def format_time(seconds):
    return f"{int(seconds // 60)}m {int(seconds % 60)}s"

def analyze_activity(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)

    time = data.get('time', [])
    gap_dist = data.get('grade_adjusted_distance', [])
    hr_stream = data.get('heartrate', [])
    velocity = data.get('velocity_smooth', [])

    # Storage for results
    pace_results = {z[0]: 0 for z in PACE_ZONES}
    hr_results = {"Z1 (Recovery)": 0, "Z2 (Easy)": 0, "Z3 (Tempo)": 0, "Z4 (Threshold)": 0, "Z5 (Max)": 0}

    # Loop through streams
    for i in range(1, len(time)):
        delta_t = time[i] - time[i-1]
        
        # Check if moving (skip stops)
        if velocity[i] < 0.5:
            continue

        # 1. Analyze GAP
        delta_gap_m = gap_dist[i] - gap_dist[i-1]
        if delta_gap_m > 0:
            inst_gap = delta_t / (delta_gap_m / 1000)
            for name, low, high in PACE_ZONES:
                if low <= inst_gap < high:
                    pace_results[name] += delta_t
                    break

        # 2. Analyze HR
        if hr_stream:
            hr = hr_stream[i]
            pct = hr / MAX_HR
            if pct < 0.60: zone = "Z1 (Recovery)"
            elif pct < 0.75: zone = "Z2 (Easy)"
            elif pct < 0.85: zone = "Z3 (Tempo)"
            elif pct < 0.92: zone = "Z4 (Threshold)"
            else: zone = "Z5 (Max)"
            hr_results[zone] += delta_t

    # --- Print Report ---
    print(f"{'ZONE':<15} | {'TIME (GAP)':<12} | {'TIME (HR)':<12}")
    print("-" * 45)
    
    # Map HR keys to Pace keys for a side-by-side view
    hr_keys = list(hr_results.keys())
    pace_keys = list(pace_results.keys())
    
    for i in range(5):
        p_zone = pace_keys[i]
        h_zone = hr_keys[i]
        print(f"{p_zone.split()[0]:<15} | {format_time(pace_results[p_zone]):<12} | {format_time(hr_results[h_zone]):<12}")

analyze_activity('latest_activity.json')