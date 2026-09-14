def site_meta(request):
    try:
        canonical_url = request.build_absolute_uri(request.path)
        og_image = request.build_absolute_uri('/static/taka..png')
    except Exception:
        canonical_url = "https://takasave.vercel.app/"
        og_image = "https://takasave.vercel.app/static/taka..png"

    return {
        "site_meta": {
            "site_title": "TakaSave - Smart Expense & Finance Manager",
            "meta_description": "Track expenses, manage multiple wallets, analyze spend breakdown with interactive charts, and take control of your financial freedom with TakaSave.",
            "meta_keywords": "TakaSave, expense manager, budget tracker, personal finance, wallet manager, financial dashboard, money management, md-mostafaraihan",
            "canonical_url": canonical_url,
            "og_image": og_image,
            "author": "md-mostafaraihan",
        },
        "year": 2026,
    }
