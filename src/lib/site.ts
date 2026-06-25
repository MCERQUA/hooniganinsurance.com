export const SITE = {
  name: "Hoonigan Insurance",
  domain: "hooniganinsurance.com",
  url: "https://hooniganinsurance.com",
  tagline: "Insurance for Modified Cars, Drift Builds & Show Cars",
  description: "Specialty insurance for modified vehicles — agreed value coverage for drift cars, show cars, track day builds, restomods, and JDM builds. Standard insurers won't do it right. We will. Licensed in all 50 states.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  statesLicensed: "All 50 states",
} as const;

export const SERVICES = [
  {
    slug: "modified-car-insurance",
    title: "Modified Car Insurance",
    short: "Agreed value coverage for modified vehicles — no ACV fights, mods fully disclosed, specialty markets only.",
    icon: "Wrench",
    description:
      "Modified car insurance with agreed value protects your full build — engine mods, suspension, bodywork, wheels, and everything you've invested. Standard auto insurers use ACV and don't account for your modifications.",
    longDescription: `## Modified Car Insurance: Agreed Value for Your Built Vehicle

Standard auto insurance was designed for stock vehicles. If you've modified your car with aftermarket parts — turbo kits, forced induction, suspension upgrades, wide-body kits, custom paint — a standard policy will pay you the stock vehicle's depreciated cash value after a loss, not what your build is actually worth.

## What Agreed Value Means

Agreed value means you and the insurer agree on the total value of your vehicle, including all modifications, at the time the policy is written. If the vehicle is totaled, you receive that agreed amount — not a depreciated ACV figure that doesn't account for a single dollar you spent building it.

## What We Cover

- Engine modifications: turbochargers, superchargers, cam kits, stroker builds, engine swaps
- Forced induction and supporting mods (intercoolers, fuel systems, tuning)
- Suspension modifications: coilovers, air suspension, airbag setups, angle kits
- Bodywork: wide-body kits, aero packages, carbon fiber components, custom paint
- Wheels and tires beyond OEM specifications
- Interior modifications: roll cages, racing seats, harnesses, aftermarket dashes
- Safety equipment permanently installed
- Custom paint, wraps, and vinyl

## Why Standard Insurers Fail Modified Cars

Standard carriers (GEICO, Progressive, State Farm) handle modified vehicles poorly for several reasons:
- They use actual cash value (ACV) — depreciated stock market value, ignoring all mods
- Undisclosed modifications can void a claim entirely
- Performance modifications often trigger "racing use" exclusions
- High-horsepower builds may be deemed uninsurable
- Salvage or rebuilt titles (common in drift builds) are frequently declined

## Our Approach

We work with specialty markets — agreed value insurers who understand built cars. We disclose everything upfront, establish agreed value that includes your mods, and place you with a carrier who will actually pay what your car is worth when something happens.`,
    coverages: [
      "Agreed value coverage (no ACV depreciation)",
      "Engine and performance modification coverage",
      "Suspension and chassis modification coverage",
      "Custom bodywork and paint coverage",
      "Aftermarket wheels and tires",
      "Interior safety equipment",
      "Salvage/rebuilt title options",
      "Storage and low-mileage rates",
    ],
    faqs: [
      {
        q: "What is agreed value coverage for a modified car?",
        a: "Agreed value means you and the insurer agree on the total value of your vehicle, including all modifications, at policy inception. If the car is totaled, you receive that agreed amount — no depreciation deduction, no ACV dispute. This is the gold standard for modified builds.",
      },
      {
        q: "Will my standard auto insurance cover my modified car?",
        a: "Standard policies typically pay actual cash value (ACV) based on the stock vehicle, ignoring aftermarket modifications. Undisclosed mods can also void a claim entirely. Modified vehicles need specialty agreed value coverage.",
      },
      {
        q: "Can you insure a car with a salvage or rebuilt title?",
        a: "Many specialty carriers write salvage and rebuilt title vehicles on agreed value policies. These are common in drift builds — purchased wrecked and built back. We work with markets that accept them.",
      },
      {
        q: "Do I need to list every modification?",
        a: "For agreed value to be accurate and enforceable, yes — all significant modifications should be disclosed and valued. We build the agreed value from your build sheet, receipts, and photos.",
      },
      {
        q: "How do I value my modified car for insurance?",
        a: "We use your purchase price, receipts for aftermarket parts, labor invoices from shops, and professional appraisals if needed. We work with what you have and can guide you through documenting a build.",
      },
      {
        q: "What if I keep adding mods after my policy starts?",
        a: "Contact us when you make significant additions. Mid-term endorsements can update your agreed value. Mods added after the policy starts and not disclosed may not be covered.",
      },
      {
        q: "Can I get storage or low-mileage rates for a car I rarely drive?",
        a: "Yes. Show cars, weekend-only builds, and cars in storage can often be rated for lower annual mileage or placed on storage-only coverage, significantly reducing premium.",
      },
      {
        q: "What about a custom paint job — is that covered?",
        a: "Yes. Custom paint is considered a modification and is included in your agreed value. Document it with photos and the painter's invoice.",
      },
    ],
  },
  {
    slug: "drift-car-insurance",
    title: "Drift Car Insurance",
    short: "Agreed value coverage for caged drift builds — including salvage titles, roll cages, and full track setup.",
    icon: "Gauge",
    description:
      "Drift car insurance with agreed value covers your full build — cage, harness, coilovers, engine mods, angle kits, and LSD. Standard policies see 'drift car' and either decline or insure you for stock value. We do it right.",
    longDescription: `## Drift Car Insurance for Caged Builds

The drift car insurance problem: most carriers refuse caged vehicles, decline salvage titles, and don't understand why a 1990 S13 with $25,000 in mods is worth insuring at $25,000, not $2,500.

## What We Cover

- Full agreed value on caged builds including fabrication work
- Roll cage (bolt-in and custom tube cage)
- Racing harnesses and seats
- Fire suppression systems
- Engine builds: SR20DET swaps, 2JZ builds, LS swaps, RB26 conversions
- Coilovers, angle kits, LSD, hubs, knuckles
- All documented aftermarket components

## What's NOT Covered (Be Clear)

Standard drift car policies cover the vehicle while stored, in transit to events, and on the street. They do NOT cover the vehicle while actively competing or driving on a circuit during an event. Competition liability is a separate, event-specific product.

## Salvage Titles

Drift cars commonly start as wrecked vehicles purchased at salvage auction. We work with carriers who write agreed value on rebuilt titles — after you provide documentation of the rebuild (inspection certificate, receipts, photos).

## Documentation for a Drift Build

To establish agreed value on a caged build: build sheet listing all components, shop receipts and invoices, cage certificate (if applicable), engine documentation, photos of the build at various stages. We'll guide you through what we need.`,
    coverages: [
      "Agreed value on complete drift build",
      "Roll cage and safety equipment coverage",
      "Engine swap and performance build coverage",
      "Salvage and rebuilt title eligible",
      "Transit to/from events coverage",
      "Storage coverage with competitive rates",
      "Full modification disclosure, no surprises",
    ],
    faqs: [
      {
        q: "Can I insure a full-cage drift car on a standard auto policy?",
        a: "No. Standard carriers consider roll cages a disqualifying modification in most cases. Specialty agreed value policies are the correct product for caged drift builds.",
      },
      {
        q: "Does drift car insurance cover me on the track?",
        a: "No — not during active competition or practice on a circuit. Drift car policies cover storage, street transport to the event, and time in the paddock. On-track use requires event-specific competition coverage.",
      },
      {
        q: "My drift car has a salvage title — can I insure it for agreed value?",
        a: "Yes, with the right carrier. Salvage and rebuilt titles are common in drift and we work with markets that accept them. You'll need a rebuilt title inspection and documentation of the repairs.",
      },
      {
        q: "How do I get my cage valued for insurance?",
        a: "The cage is part of your total agreed value. We use the fabricator's invoice and installation labor cost. A quality tube cage by a professional shop can add $5,000–$15,000+ to your agreed value.",
      },
      {
        q: "What if my drift car is stolen from my driveway?",
        a: "Agreed value comprehensive coverage pays the agreed value amount if the car is stolen and not recovered, minus your deductible. Same for fire and weather damage.",
      },
    ],
  },
  {
    slug: "show-car-insurance",
    title: "Show Car Insurance",
    short: "Agreed value and transit coverage for show vehicles — custom paint, bodywork, and aftermarket parts protected.",
    icon: "Star",
    description:
      "Show car insurance with agreed value protects your build for its true worth — custom paint, body modifications, aftermarket accessories, and restoration investment. Plus transit coverage to shows and events.",
    longDescription: `## Show Car Insurance

Show cars represent years of work and significant investment. Custom paint alone can cost $10,000–$50,000. Body kits, custom interiors, chrome work, and proprietary fabrication add tens of thousands more. A stock-value ACV policy covers almost none of it.

## What Show Car Insurance Covers

- Agreed value on the complete show car including all custom work
- Custom paint, metal flake, airbrushed artwork, specialty finishes
- Wide-body and aero body kits
- Custom interiors, upholstery, suede headliners
- Chrome, polished aluminum, and billet components
- Aftermarket wheels, stance modifications
- Audio and entertainment systems
- Transit to car shows, cruises, concours events, exhibitions

## Valuation

Show car valuation requires documentation. We work from professional appraisals, trophy records, show results, build receipts, and painter/shop invoices. For high-end show cars, we recommend a current professional appraisal to establish agreed value with confidence.

## Limited Use Rates

Show cars that are trailered to events or driven only seasonally qualify for limited mileage or storage rates — significantly lower than daily driver premiums.`,
    coverages: [
      "Agreed value on complete show build",
      "Custom paint and specialty finish coverage",
      "Bodywork and fabrication coverage",
      "Interior modification coverage",
      "Audio and technology systems",
      "Transit to shows and events",
      "Limited use / trailer queen rates",
      "Same-day certificates for show events",
    ],
    faqs: [
      {
        q: "Does my show car need agreed value or can I use stated value?",
        a: "Agreed value is always superior for a show car. Stated value pays the lesser of the stated value or ACV at the time of loss — meaning you could still get ACV if the car has depreciated. Agreed value pays the agreed amount, period.",
      },
      {
        q: "How do I prove my show car's value for insurance?",
        a: "Professional appraisals, build receipts, painter and shop invoices, show awards and trophies, and professional photographs all help establish value. For very high-value cars, we recommend a certified appraisal from an enthusiast auto appraiser.",
      },
      {
        q: "Does show car insurance cover the car while being trailered?",
        a: "Yes — transit coverage is included, covering the vehicle while loaded on a trailer en route to a show or event. If the trailer is in an accident, your show car is covered.",
      },
      {
        q: "Can I get a certificate of insurance for a car show event?",
        a: "Yes, same-day. Some concours events and prestigious car shows require proof of insurance. We provide ACORD certificates quickly.",
      },
      {
        q: "Is my show car covered at the event itself?",
        a: "Property coverage applies while the car is on display. Liability for the event itself (as an organizer) is separate; if you're just an exhibitor, your personal auto liability generally applies.",
      },
    ],
  },
  {
    slug: "track-day-insurance",
    title: "Track Day Insurance",
    short: "Understand the on-track coverage gap — and options for HPDE participants and track day drivers.",
    icon: "Flag",
    description:
      "Standard auto policies exclude on-track use. HPDE and track day drivers need to understand exactly where their coverage ends and what options exist for on-track physical damage protection.",
    longDescription: `## Track Day Insurance: The Coverage Gap

Your standard auto policy — whether standard or even specialty modified car coverage — explicitly excludes use on a racetrack or closed course. Read your policy: there will be an exclusion for "competitive events," "racing," or "track use." Some policies also exclude HPDE/instructional events even though they're not racing.

## What This Means for Track Day Drivers

If you're on track for an HPDE or open track event and you have an incident, you're paying out of pocket. The HPDE organizer's liability covers their negligence, not your vehicle. This is an important distinction.

## On-Track Physical Damage Options

Specialty track day physical damage coverage is available through specific providers (Lockton Motorsports, Competition Insurance Associates, Open Track). These are event-specific or annual policies covering on-track physical damage.

Important: these are separate from standard modified car policies, not included. CCA can help you find and layer these products.

## What Your Specialty Auto Policy Still Covers

- Transport of the vehicle to and from the track
- Paddock storage and setup
- Street driving to/from the venue
- Comprehensive (fire, theft, vandalism at the track)

The on-track driving is the exclusion — everything else is covered normally.`,
    coverages: [
      "Transport to/from track coverage",
      "Paddock and pit area coverage",
      "Comprehensive at the track venue",
      "Guidance on on-track physical damage options",
      "Event-specific product referrals",
      "HPDE vs. competition distinctions explained",
    ],
    faqs: [
      {
        q: "Does my car insurance cover me at a track day?",
        a: "Standard auto policies, and most specialty modified car policies, explicitly exclude on-track use. The exclusion typically applies to any use on a closed course or competitive event, including HPDE.",
      },
      {
        q: "What is HPDE insurance?",
        a: "HPDE (High Performance Driving Education) event coverage provides physical damage protection for your vehicle while on-track during instructional driving events. These are separate event-specific or annual products from providers like Lockton Motorsports.",
      },
      {
        q: "Does HPDE count as 'racing' under my insurance policy?",
        a: "Many insurers treat HPDE events the same as racing for exclusion purposes. Some make a distinction because HPDE is instructional. Read your policy's exact language — if it says 'track use' or 'closed course,' HPDE is likely excluded.",
      },
      {
        q: "Is my car covered in the paddock if not running on track?",
        a: "Yes — comprehensive coverage (fire, theft, vandalism) applies in the paddock and pit area. The exclusion is specifically for on-track driving.",
      },
      {
        q: "How much does track day physical damage insurance cost?",
        a: "Event-specific track day coverage typically runs $150–$400 per event depending on vehicle value and coverage limits. Annual HPDE programs are available for frequent participants.",
      },
    ],
  },
  {
    slug: "custom-parts-coverage",
    title: "Custom Parts & Equipment Coverage",
    short: "Specialty coverage for aftermarket wheels, audio, performance parts, and body kits beyond standard policy caps.",
    icon: "Settings",
    description:
      "Standard auto policies cap custom parts and equipment coverage at $1,500–$5,000. If you have aftermarket wheels, a turbo kit, a stereo, or a body kit, that cap is gone before you list three items. Specialty coverage schedules your actual investment.",
    longDescription: `## Custom Parts & Equipment (CPE) Coverage

Every major auto insurer offers a "custom parts and equipment" rider — and they're nearly all capped at $1,500 or less. GEICO's standard CPE rider caps at $1,500. Progressive's caps at $5,000. When your wheel set alone costs $3,000 and your turbo kit is $4,000, these caps are effectively meaningless.

## What Counts as CPE

- Wheels and tires beyond OEM specifications
- Audio/entertainment systems: head units, amplifiers, subwoofers, speakers
- Performance parts: turbo/supercharger kits, intercoolers, intakes, exhausts, clutches
- Suspension modifications: coilovers, airbags, sway bars, control arms
- Aero and bodywork: splitters, diffusers, wide-body panels, aftermarket bumpers
- Lighting: aftermarket headlights, underbody lighting, LED upgrades
- Interior: custom seats, steering wheels, shift knobs, roll cages

## The Right Solution

For heavily modified vehicles, the better approach is almost always an agreed value policy that incorporates all modifications into a single total value. This avoids itemizing every part and ensures comprehensive coverage without gap analysis.

For vehicles with lighter modifications on otherwise-standard policies, a specialty CPE endorsement with higher per-item limits may be appropriate.`,
    coverages: [
      "Scheduled aftermarket parts coverage",
      "Wheels and tires beyond OEM",
      "Audio and entertainment systems",
      "Performance modifications",
      "Aero and body kit coverage",
      "Interior modifications",
      "Higher limits than standard CPE riders",
      "Agreed value alternative for heavy builds",
    ],
    faqs: [
      {
        q: "What is CPE coverage on an auto policy?",
        a: "CPE (Custom Parts and Equipment) coverage is an endorsement that covers aftermarket parts installed on your vehicle. Standard CPE riders typically cap at $1,500–$5,000 — often far less than the value of a modified vehicle's aftermarket components.",
      },
      {
        q: "My standard policy has a $5,000 CPE rider — is that enough?",
        a: "For most modified cars, $5,000 is not enough. One wheel set at $3,000, one turbo kit at $4,000, and one exhaust at $1,500 already exceeds $5,000. If your total aftermarket investment is over $5,000, you need either higher CPE limits or an agreed value policy.",
      },
      {
        q: "Should I use CPE coverage or agreed value for my modified car?",
        a: "For vehicles with total modification values over $10,000, agreed value is almost always the better choice. It's simpler (one agreed value rather than per-item scheduling), more comprehensive, and removes the per-item dispute risk at claim time.",
      },
      {
        q: "Does CPE coverage include custom paint?",
        a: "Custom paint can be included in CPE coverage if specifically listed. On an agreed value policy, it's included in the total agreed value. Make sure paint is documented with photos and the painter's invoice regardless.",
      },
      {
        q: "Are aftermarket safety items like a fire suppression system covered as CPE?",
        a: "Permanently installed safety equipment — fire suppression, roll cages, racing harnesses — can be covered as CPE or as part of agreed value. Some carriers may treat safety equipment favorably in underwriting.",
      },
    ],
  },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years Placing Specialty Auto Insurance" },
  { value: 50, suffix: " States", label: "Licensed Nationwide" },
  { value: 5000, suffix: "+", label: "Enthusiast Vehicles Insured" },
  { value: 24, suffix: " Hours", label: "Quote Turnaround" },
] as const;

export const TESTIMONIALS: readonly { quote: string; name: string; role: string; location: string }[] = [];

export const FAQS = [
  {
    q: "What is agreed value car insurance and why does a modified car need it?",
    a: "Agreed value means you and the insurer agree on the total value of your vehicle — including all modifications — before any loss occurs. If the car is totaled, you receive that agreed amount with no depreciation deduction. Modified cars need agreed value because standard ACV policies pay the stock vehicle's market value and ignore every dollar you've put into building it.",
  },
  {
    q: "Will my standard auto insurance cover my built car?",
    a: "Standard auto policies (GEICO, Progressive, State Farm) typically pay actual cash value based on the stock vehicle. They cap custom parts coverage at $1,500–$5,000 and may void claims for undisclosed modifications. For any seriously modified vehicle, a specialty agreed value policy is the correct coverage.",
  },
  {
    q: "Can you insure a drift car, show car, or track day build?",
    a: "Yes. We specialize in exactly these vehicles. Drift builds with cages and salvage titles, show cars with six-figure paint and custom fabrication, and track day machines with full performance builds. We place them with specialty carriers using agreed value.",
  },
  {
    q: "Do you cover vehicles with salvage or rebuilt titles?",
    a: "Yes. Salvage and rebuilt titles are common in the modified car world, especially drift builds. We work with carriers who write agreed value on rebuilt titles. You'll need documentation of the rebuild, but coverage is available.",
  },
  {
    q: "Does modified car insurance cover me on the track?",
    a: "Standard and specialty modified car policies exclude on-track use. This includes HPDE events in most cases. We can explain your coverage boundaries and point you toward event-specific on-track physical damage products.",
  },
  {
    q: "How much does specialty modified car insurance cost?",
    a: "Agreed value specialty policies for modified vehicles typically run $500–$2,500/year for storage and limited street use. Daily drivers with mods run higher based on mileage and driver profile. Track-configured cars rated for show/storage only are at the lower end.",
  },
  {
    q: "How do I get a quote for my modified car?",
    a: "Call 844-967-5247 or submit a quote request. We'll ask for: make, model, year, estimated total value (including mods), VIN, how the car is used, and a list of significant modifications. Same-day quotes in most cases.",
  },
  {
    q: "What carriers do you use for modified car insurance?",
    a: "We access specialty markets for enthusiast and modified vehicles — including programs through specialty E&S carriers with long track records in agreed value collector and modified auto. We shop multiple markets to find the best rate for your specific build.",
  },
] as const;

export const CREDENTIALS = [
  "Licensed in All 50 States",
  "NPN #8608479",
  "Founded 2005",
  "A.M. Best A+ Rated Carriers",
  "Modified Vehicle Specialists",
  "Same-Day Certificates",
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
