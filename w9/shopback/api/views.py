from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product, Category
from django.http import Http404


def category_list(request):
    categories = Category.objects.all()
    json_categories = [c.to_json() for c in categories]
    return JsonResponse(json_categories, safe=False)


def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        raise Http404
    return JsonResponse(category.to_json())


def category_product(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        raise Http404
    products = category.product_set.all()
    json_products = [p.to_json() for p in products]
    return JsonResponse(json_products, safe=False)


def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)


def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as e:
        raise Http404
    return JsonResponse(product.to_json())
